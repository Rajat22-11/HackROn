import React, { useState, useEffect } from "react";
import { ChevronRight, TrendingUp, PieChart } from "lucide-react";

// API fetch functions with error handling
const fetchProductData = async (productName) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/product/${encodeURIComponent(productName)}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {};
  }
};

const fetchDiscountData = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/predict_discount/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching discount data:", error);
    return null;
  }
};

const fetchStockTrend = async (location, productName) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/stock_trend?location=${encodeURIComponent(location)}&product=${encodeURIComponent(productName)}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.text();
  } catch (error) {
    console.error("Error fetching stock trend:", error);
    return "";
  }
};

export default function NextPage() {
  const [formData, setFormData] = useState({
    Product_Name: "",
    Category: "",
    Location: "",
    MRP: 0,
    Blinkit_Price: 0,
    Zepto_Price: 0,
    Instamart_Price: 0,
    Margin: 0,
    Festive_Seasonal_Impact: "",
    Shelf_Life_days: 0,
    Min_Stock: 0,
    Max_Stock: 0,
    Customer_Sentiment: "",
    Weight_g: 0,
    Weight_Unit: "",
    Order_Date: "",
    Order_Hour: 0,
    customer_type: "",
  });
  const [productData, setProductData] = useState({});
  const [discountData, setDiscountData] = useState(null);
  const [stockTrend, setStockTrend] = useState("");

  // Load form data from localStorage on mount
  useEffect(() => {
    const form1Data = JSON.parse(localStorage.getItem('form1Data') || '{}');
    const form2Data = JSON.parse(localStorage.getItem('form2Data') || '{}');
    const form3Data = JSON.parse(localStorage.getItem('form3Data') || '{}');
    const combinedFormData = { ...formData, ...form1Data, ...form2Data, ...form3Data };
    setFormData(combinedFormData);
  }, []);

  // Fetch data when Product_Name is available
  useEffect(() => {
    if (formData.Product_Name && formData.Location) {
      Promise.all([
        fetchProductData(formData.Product_Name).then(setProductData),
        fetchDiscountData(formData).then(setDiscountData),
        fetchStockTrend(formData.Location, formData.Product_Name).then(setStockTrend),
      ]).catch((error) => console.error("API fetch failed:", error));
    }
  }, [formData.Product_Name, formData.Location]);

  return (
    // Your existing JSX remains the same
    <div style={styles.container}>
      {/* ... rest of your JSX ... */}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  contentWrapper: {
    display: "flex",
    width: "95%",
    maxWidth: "1200px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  leftSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9fafb",
  },
  rightSection: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  },
  productImageContainer: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
  overlayText: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  graphContainer: {
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "white",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  graphHeader: {
    marginBottom: "10px",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    color: "#2d3748",
    margin: "0 0 10px 0",
  },
  graphImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a202c",
    marginBottom: "15px",
  },
  productDesc: {
    fontSize: "16px",
    color: "#4a5568",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  productCategory: {
    fontSize: "14px",
    color: "#718096",
    marginBottom: "20px",
    padding: "5px 10px",
    backgroundColor: "#e2e8f0",
    borderRadius: "4px",
    display: "inline-block",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
  },
  mrpSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mrpLabel: {
    fontSize: "14px",
    color: "#718096",
  },
  mrp: {
    fontSize: "18px",
    color: "#4a5568",
  },
  strikeThrough: {
    textDecoration: "line-through",
    color: "#e53e3e",
  },
  dynamicPriceSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dynamicPriceLabel: {
    fontSize: "14px",
    color: "#2d3748",
  },
  dynamicPrice: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#38a169",
  },
  tableContainer: {
    marginTop: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#edf2f7",
    color: "#2d3748",
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #e2e8f0",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#4a5568",
  },
  tdValue: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#2d3748",
    fontWeight: "bold",
    textAlign: "right",
  },
  tdValuePositive: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#38a169",
    fontWeight: "bold",
    textAlign: "right",
  },
  tdValueNegative: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#e53e3e",
    fontWeight: "bold",
    textAlign: "right",
  },
  tdValueFinal: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#1a202c",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: "18px",
  },
  actionButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 20px",
    backgroundColor: "#3182ce",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  },
  iconStyle: {
    marginRight: "8px",
    strokeWidth: 2,
  },
};
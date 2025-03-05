import React from "react";

export default function NextPage() {
  return (
    <div style={styles.container}>
      {/* Product Section */}
      <div style={styles.productSection}>
        {/* Left: Product Description & Price */}
        <div style={styles.productDetails}>
          <h2 style={styles.productTitle}>Product Name</h2>
          <p style={styles.productDesc}>
            This is a short description of the product. It highlights key features and benefits.
          </p>
          <p style={styles.mrp}>
            MRP: <span style={styles.strikeThrough}>₹999</span>
          </p>
          <p style={styles.dynamicPrice}>Dynamic Price: <span style={styles.price}>₹749</span></p>
        </div>

        {/* Right: Product Image */}
        <div style={styles.productImageContainer}>
          <img src="https://via.placeholder.com/400x250" alt="Product" style={styles.productImage} />
        </div>
      </div>

      {/* Graph & Table Section */}
      <div style={styles.analysisSection}>
        {/* Left: Price Calculation Table */}
        <div style={styles.tableContainer}>
          <h3 style={styles.sectionTitle}>Price Breakdown</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Factor</th>
                <th style={styles.th}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Base Price</td><td style={styles.td}>₹699</td></tr>
              <tr><td style={styles.td}>Competitor Influence</td><td style={styles.td}>+₹50</td></tr>
              <tr><td style={styles.td}>Demand Surge</td><td style={styles.td}>+₹30</td></tr>
              <tr><td style={styles.td}>Loyalty Discount</td><td style={styles.td}>-₹30</td></tr>
              <tr><td style={styles.td}><b>Final Price</b></td><td style={styles.td}><b>₹749</b></td></tr>
            </tbody>
          </table>
        </div>

        {/* Right: Graph */}
        <div style={styles.graphContainer}>
          <h3 style={styles.sectionTitle}>Price Trend</h3>
          <img src="https://via.placeholder.com/400x250" alt="Graph" style={styles.graphImage} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    padding: "90px 40px 20px", // Top padding for navbar, bottom spacing
    backgroundColor: "#FFFFFF", // White background
  },
  productSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "40px",
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000000",
  },
  productDesc: {
    fontSize: "16px",
    color: "#333333",
    marginBottom: "10px",
  },
  mrp: {
    fontSize: "18px",
    color: "#666666",
  },
  strikeThrough: {
    textDecoration: "line-through",
    color: "#FF0000",
  },
  dynamicPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0C831F",
  },
  price: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  productImageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  productImage: {
    width: "400px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  analysisSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
  },
  tableContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000000",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#F8CB46",
    padding: "10px",
    border: "1px solid #000",
  },
  td: {
    padding: "10px",
    border: "1px solid #000",
  },
  graphContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  graphImage: {
    width: "400px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [basePrice, setBasePrice] = useState(500);
  const [competitorPrice, setCompetitorPrice] = useState(500);
  const [customerType, setCustomerType] = useState("normal");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to NextPage with form data as state
    navigate("/nextPage", {
      state: { productName, category, basePrice, competitorPrice, customerType },
    });
  };

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "auto", 
      padding: "2rem", 
      background: "linear-gradient(to bottom right, #ffffff, #f9fafb)", 
      borderRadius: "10px", 
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
      border: "1px solid #e5e7eb" 
    }}>
      <h2 style={{ 
        fontSize: "1.5rem", 
        fontWeight: "bold", 
        color: "#1f2937", 
        textAlign: "center", 
        marginBottom: "1rem" 
      }}>
        Dynamic Pricing Form
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Product Name */}
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Product Name:</label>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            required 
            style={{ 
              width: "100%", 
              padding: "0.6rem", 
              marginTop: "0.3rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "5px", 
              fontSize: "1rem" 
            }}
          />
        </div>

        {/* Category */}
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Category:</label>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            style={{ 
              width: "100%", 
              padding: "0.6rem", 
              marginTop: "0.3rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "5px", 
              fontSize: "1rem" 
            }}
          />
        </div>

        {/* Base Price */}
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Base Price (₹):</label>
          <input 
            type="number" 
            value={basePrice} 
            onChange={(e) => setBasePrice(Number(e.target.value))} 
            min="1" 
            required 
            style={{ 
              width: "100%", 
              padding: "0.6rem", 
              marginTop: "0.3rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "5px", 
              fontSize: "1rem" 
            }}
          />
        </div>

        {/* Competitor Price */}
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Competitor Price (₹):</label>
          <input 
            type="number" 
            value={competitorPrice} 
            onChange={(e) => setCompetitorPrice(Number(e.target.value))} 
            min="1" 
            required 
            style={{ 
              width: "100%", 
              padding: "0.6rem", 
              marginTop: "0.3rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "5px", 
              fontSize: "1rem" 
            }}
          />
        </div>

        {/* Customer Type */}
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Customer Type:</label>
          <select 
            value={customerType} 
            onChange={(e) => setCustomerType(e.target.value)} 
            style={{ 
              width: "100%", 
              padding: "0.6rem", 
              marginTop: "0.3rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "5px", 
              fontSize: "1rem" 
            }}
          >
            <option value="premium">Premium</option>
            <option value="normal">Normal</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ 
          backgroundColor: "#10b981", 
          color: "#ffffff", 
          padding: "0.8rem", 
          fontSize: "1rem", 
          fontWeight: "600", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer", 
          transition: "background 0.3s ease-in-out" 
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Form1.jsx
import { useState } from "react";

export function Form1({ nextStep }) {
  const [formData, setFormData] = useState({
    Location: "",
    Customer_Sentiment: "",
    Order_Hour: 0,
    customer_type: "Premium"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For number inputs, convert to the appropriate type
    const processedValue = e.target.type === "number" ? 
      (name === "Order_Hour" ? parseInt(value, 10) : parseFloat(value)) : 
      value;
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('form1Data', JSON.stringify(formData));
    nextStep();
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
        Customer Details
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Location:</label>
          <select 
            name="Location"
            value={formData.Location} 
            onChange={handleChange} 
            required 
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              backgroundColor: "#fff",
              marginTop: "0.25rem"
            }}
          >
            <option value="">Select Location</option>
            <option value="Baner">Baner</option>
            <option value="Wakad">Wakad</option>
            <option value="Kothrud">Kothrud</option>
            <option value="Aundh">Aundh</option>
            <option value="Viman Nagar">Viman Nagar</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Customer Sentiment:</label>
          <input 
            type="text" 
            name="Customer_Sentiment"
            value={formData.Customer_Sentiment} 
            onChange={handleChange} 
            required 
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              backgroundColor: "#fff",
              marginTop: "0.25rem"
            }} 
          />
        </div>

        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Order Hour:</label>
          <input 
            type="number" 
            name="Order_Hour"
            min="0"
            max="23"
            step="1"
            value={formData.Order_Hour} 
            onChange={handleChange} 
            required 
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              backgroundColor: "#fff",
              marginTop: "0.25rem"
            }} 
          />
        </div>

        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Customer Type:</label>
          <select 
            name="customer_type"
            value={formData.customer_type} 
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              backgroundColor: "#fff",
              marginTop: "0.25rem"
            }}
          >
            <option value="Premium">Premium</option>
            <option value="Basic">Basic</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Form1;

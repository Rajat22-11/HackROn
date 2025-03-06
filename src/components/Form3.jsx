import { useState } from "react";

export function Form3({ prevStep, navigate }) {
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState({
    Blinkit_Price: 0,
    Zepto_Price: 0,
    Instamart_Price: 0,
    Margin: 0,
    Festive_Seasonal_Impact: "None",  // Default value
    Order_Date: today
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For number inputs, convert to float as required by the model
    const processedValue = e.target.type === "number" ? parseFloat(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage (matching Form2 pattern)
    localStorage.setItem('form3Data', JSON.stringify(formData));
    
    // Navigate to the next page
    navigate("/nextPage");
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
        Pricing Details
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Blinkit Price (₹):</label>
          <input 
            type="number"
            step="0.01" 
            name="Blinkit_Price"
            value={formData.Blinkit_Price} 
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
          <label style={{ fontWeight: "600", color: "#374151" }}>Zepto Price (₹):</label>
          <input 
            type="number"
            step="0.01" 
            name="Zepto_Price"
            value={formData.Zepto_Price} 
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
          <label style={{ fontWeight: "600", color: "#374151" }}>Instamart Price (₹):</label>
          <input 
            type="number"
            step="0.01" 
            name="Instamart_Price"
            value={formData.Instamart_Price} 
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
          <label style={{ fontWeight: "600", color: "#374151" }}>Margin (%):</label>
          <input 
            type="number"
            step="0.01" 
            name="Margin"
            value={formData.Margin} 
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
          <label style={{ fontWeight: "600", color: "#374151" }}>Festive/Seasonal Impact:</label>
          <select 
            name="Festive_Seasonal_Impact"
            value={formData.Festive_Seasonal_Impact} 
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
            <option value="None">None</option>
            <option value="Monsoon">Monsoon</option>
            <option value="Diwali">Diwali</option>
            <option value="Summer">Summer</option>
            <option value="Holi">Holi</option>
            <option value="Winter">Winter</option>
            <option value="Exam Season">Exam Season</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: "600", color: "#374151" }}>Order Date (YYYY-MM-DD):</label>
          <input 
            type="date" 
            name="Order_Date"
            value={formData.Order_Date} 
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

        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          gap: "1rem" 
        }}>
          <button 
            type="button" 
            onClick={prevStep} 
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              border: "none",
              backgroundColor: "#6b7280",
              color: "white",
              fontWeight: "500",
              cursor: "pointer",
              flex: 1
            }}
          >
            Previous
          </button>
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
              flex: 1
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form3;

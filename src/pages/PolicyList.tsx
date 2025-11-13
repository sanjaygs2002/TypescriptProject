import { useState } from "react";
import type { Policy } from "../types/types";
import policiesData from "../data/policies.json";
import { useAuth } from "../context/useAuth";
import insuranceBanner from "../assets/insurance.jpg";
import "./PolicyList.css";

const PolicyList = () => {
  const { user, buyPolicy } = useAuth();
  const [policies] = useState<Policy[]>(() => policiesData as Policy[]);

  return (
    <div className="policy-container">
   
      <section className="hero-section">
        <img src={insuranceBanner} alt="Insurance Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Protect What Matters Most</h1>
          <p className="hero-subtitle">
            Choose the right insurance policy for your life, health, and vehicle — secure your family’s future today.
          </p>
        </div>
      </section>

     
      <section className="policies-section">
        <h2 className="section-title">Available Insurance Policies</h2>
        <div className="policy-grid">
          {policies.map((policy) => (
            <div key={policy.id} className="policy-card">
              <h3 className="policy-name">{policy.name}</h3>
              <p>Type: {policy.type}</p>
              <p>Premium: ₹{policy.premium}</p>
              <p>Term: {policy.term} years</p>
              <p className="policy-desc">{policy.description}</p>

              {user ? (
                <button onClick={() => buyPolicy(policy)} className="buy-btn">
                  Buy Policy
                </button>
              ) : (
                <p className="login-warning">Please log in to buy</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolicyList;

import { useAuth } from "../context/useAuth";
import "./MyPolicies.css";

const MyPolicies = () => {
  const { user } = useAuth();

  if (!user)
    return <p className="no-login">Please log in to view your policies.</p>;

  return (
    <div className="mypolicies-container">
      <h2 className="mypolicies-title">My Policies</h2>
      {user.myPolicies.length === 0 ? (
        <p className="no-policies">No policies purchased yet.</p>
      ) : (
        <div className="mypolicies-grid">
          {user.myPolicies.map((policy) => (
            <div key={policy.id} className="mypolicy-card">
              <h3 className="mypolicy-name">{policy.name}</h3>
              <p>Type: {policy.type}</p>
              <p>Premium: ₹{policy.premium}</p>
              <p>Term: {policy.term} years</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPolicies;

 import { useState } from "react";
import { supabase } from "../lib/supBaseClient"; // your Supabase client
import "./AuthForm.css";

type prop  = { type: "login" | "register" };
// type = "login" or "register"
const AuthForm = ({ type } : prop) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (type === "register") {
        const { error , data } = await supabase.auth.signUp({ email, password  ,options: {
        // redirect URL after email confirmation (optional)
        emailRedirectTo: `${window.location.origin}dashboard`,
        
      }, });
      console.log(data , '---' ,  `${window.location.origin}dashboard`)
       setUser('');
       setPassword('');setEmail('');
        if (error) throw error;
        setMessage("Check your email for a confirmation link!");
      
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (!error) {
  window.location.href = '/dashboard';
}
        setMessage("Login successful!");
      }
        setUser('');
       setPassword('');setEmail('');
    } catch (error:any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>{type === "register" ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {type === "register" && (
            <>
             <label>Name</label>
        <input
          type="name"
          placeholder="Enter Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
            </>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : type === "register" ? "Sign Up" : "Login"}
        </button>

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;

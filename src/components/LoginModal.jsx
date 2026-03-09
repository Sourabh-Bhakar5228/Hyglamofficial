import React, { useState, useEffect } from "react";
import logo from "/assets/lettermark.png";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Eye, EyeOff } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Inline Styles ────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');

  :root {
    --gold: #fab03f;
    --gold-light: #ffce7d;
    --gold-dark: #c5822b;
    --black: #0a0a0a;
    --black-2: #111111;
    --black-3: #1a1a1a;
    --white: #fafafa;
    --white-dim: rgba(250, 250, 250, 0.07);
    --white-border: rgba(250, 250, 250, 0.12);
  }

  .lm-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .lm-card {
    position: relative;
    background: var(--black-2);
    height: 100%;
    max-height:700px;
    width: 100%;
    max-width:600px;
    border: 1px solid rgba(250, 176, 63, 0.3);
    box-shadow:
      0 0 0 1px rgba(250, 176, 63, 0.08),
      0 40px 80px rgba(0,0,0,0.7),
      inset 0 1px 0 rgba(250, 176, 63, 0.15);
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
  }

  /* Corner accents */
  .lm-card::before,
  .lm-card::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border-color: var(--gold);
    border-style: solid;
    z-index: 2;
  }
  .lm-card::before { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
  .lm-card::after  { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

  /* Top decorative bar */
  .lm-topbar {
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark), transparent);
  }

  .lm-header {
    // padding: 2rem 2.5rem 1.5rem;
    text-align: center;
    position: relative;
  }

  .lm-logo-wrap {
    display: flex;
    justify-content: center;
  }

  .lm-logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  .lm-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.85rem;
    font-weight: 300;
    color: var(--white);
    letter-spacing: 0.08em;
    line-height: 1.1;
    margin-bottom: 0.35rem;
  }

  .lm-title span {
    display: block;
    font-size: 0.7rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.5rem;
  }

  .lm-divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.5rem 0;
  }
  .lm-divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(250, 176, 63, 0.4));
  }
  .lm-divider-line:last-child {
    background: linear-gradient(90deg, rgba(250, 176, 63, 0.4), transparent);
  }
  .lm-divider-diamond {
    width: 5px;
    height: 5px;
    background: var(--gold);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .lm-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: transparent;
    border: 1px solid var(--white-border);
    color: rgba(250,250,250,0.4);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 10;
  }
  .lm-close:hover {
    border-color: var(--gold);
    color: var(--gold);
  }

  .lm-body {
    padding: 0 2.5rem 2rem;
  }

  /* Tab Toggle */
  .lm-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid var(--white-border);
    margin-bottom: 1.75rem;
    background: rgba(0,0,0,0.3);
  }

  .lm-tab {
    padding: 0.65rem;
    background: transparent;
    border: none;
    color: rgba(250,250,250,0.35);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
  }
  .lm-tab.active {
    background: var(--white-dim);
    color: var(--gold);
  }
  .lm-tab.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  /* Input Group */
  .lm-field {
    margin-bottom: 1rem;
    position: relative;
  }

  .lm-label {
    display: block;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(250, 176, 63, 0.7);
    margin-bottom: 0.4rem;
  }

  .lm-input-wrap {
    position: relative;
  }

  .lm-input {
    width: 100%;
    padding: 0.8rem 1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.82rem;
    font-weight: 300;
    letter-spacing: 0.04em;
    outline: none;
    transition: all 0.25s;
    box-sizing: border-box;
  }
  .lm-input::placeholder {
    color: rgba(255,255,255,0.2);
    font-weight: 300;
  }
  .lm-input:focus {
    border-color: rgba(250, 176, 63, 0.6);
    background: rgba(250, 176, 63, 0.04);
    box-shadow: 0 0 0 3px rgba(250, 176, 63, 0.06);
  }
  .lm-input.has-icon {
    padding-right: 2.75rem;
  }

  .lm-icon-btn {
    position: absolute;
    right: 0.85rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255,255,255,0.25);
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    transition: color 0.2s;
  }
  .lm-icon-btn:hover { color: var(--gold); }

  /* Captcha */
.lm-captcha-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid var(--white-border);
  margin-bottom: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
}

.lm-captcha-box:hover {
  border-color: rgba(250, 176, 63, 0.4);
}

/* LABEL */
.lm-captcha-label {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(250, 176, 63, 0.65);
  white-space: nowrap;
}

/* EQUATION */
.lm-captcha-eq {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--white);
  letter-spacing: 0.05em;
  white-space: nowrap;
}

/* INPUT */
.lm-captcha-input {
  width: 60px;
  flex-shrink: 0;
  padding: 0.4rem 0.55rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  text-align: center;
  outline: none;
  border-radius: 6px;
  transition: all 0.25s ease;

  /* Remove spinner */
  -moz-appearance: textfield;
}

.lm-captcha-input::-webkit-outer-spin-button,
.lm-captcha-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Focus effect */
.lm-captcha-input:focus {
  border-color: rgba(250, 176, 63, 0.6);
  box-shadow: 0 0 0 2px rgba(250, 176, 63, 0.2);
  background: rgba(255,255,255,0.08);
}

/* VALID STATE (optional) */
.lm-captcha-input.valid {
  border-color: #4ade80;
  box-shadow: 0 0 0 2px rgba(74,222,128,0.25);
}

/* CHECK ICON BOX */
.lm-captcha-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #fab03f, #c5822b);
  flex-shrink: 0;
  margin-left: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(250, 176, 63, 0.3);
}

  /* Error */
  .lm-error {
    padding: 0.6rem 0.85rem;
    background: rgba(220, 50, 50, 0.08);
    border: 1px solid rgba(220, 50, 50, 0.3);
    border-left: 2px solid #dc3232;
    color: #f08080;
    font-size: 0.72rem;
    letter-spacing: 0.03em;
    margin-bottom: 1rem;
  }

  /* Primary Button */
  .lm-btn-primary {
    width: 100%;
    padding: 0.9rem;
    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-dark) 100%);
    background-size: 200% 100%;
    border: none;
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1.25rem;
    position: relative;
    overflow: hidden;
  }
  .lm-btn-primary:hover:not(:disabled) {
    background-position: right center;
    box-shadow: 0 4px 20px rgba(250, 176, 63, 0.35);
    transform: translateY(-1px);
  }
  .lm-btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .lm-btn-primary::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s;
  }
  .lm-btn-primary:hover::before { left: 100%; }

  /* Separator */
  .lm-sep {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    color: rgba(255,255,255,0.2);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .lm-sep::before, .lm-sep::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--white-border);
  }

  /* Google Button */
  .lm-btn-google {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.8rem;
    background: transparent;
    border: 1px solid var(--white-border);
    color: rgba(250,250,250,0.6);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s;
    margin-bottom: 1.5rem;
  }
  .lm-btn-google:hover {
    border-color: rgba(250, 176, 63, 0.4);
    color: var(--white);
    background: var(--white-dim);
  }

  .lm-google-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  /* Footer */
  .lm-footer {
    text-align: center;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.05em;
    padding-top: 1.25rem;
    border-top: 1px solid var(--white-border);
  }
  .lm-footer-link {
    background: none;
    border: none;
    color: var(--gold);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    transition: color 0.2s;
    margin-left: 4px;
  }
  .lm-footer-link:hover { color: var(--gold-light); }

  /* Bottom bar */
  .lm-bottombar {
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(250, 176, 63, 0.2), transparent);
    margin-top: 0.5rem;
  }
`;

export default function LoginModal({ isOpen, onClose }) {
  const { loginWithGoogle, login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      setUserAnswer("");
      setIsCaptchaValid(false);
      setError("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setIsLoading(false);
    }
  }, [isOpen]);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  };

  const handleCaptchaChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);
    if (parseInt(val) === num1 + num2) {
      setIsCaptchaValid(true);
      setError("");
    } else {
      setIsCaptchaValid(false);
    }
  };

  const sendEmailNotification = (user, type) => {
    const serviceID_val = "service_ptg5v1j";
    const templateID_val = "template_kdubvxv";
    const publicKey_val = "Pl04NP-F2Pgl_1AvG";

    const templateParams = {
      to_email: "hyglamofficial@gmail.com",
      user_email: user.email,
      user_uid: user.uid,
      user_phone: phoneNumber || "+91 8307802850",
      login_type: type,
      message: `New ${type} detected. Email: ${user.email} Phone: ${phoneNumber || "+91 8307802850"} UID: ${user.uid}`,
    };

    emailjs
      .send(serviceID_val, templateID_val, templateParams, publicKey_val)
      .then(() => console.log("Email sent successfully!"))
      .catch((err) => console.error("Failed to send email:", err));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setError("Please solve the captcha correctly.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await login(email, password);
      } else {
        userCredential = await signup(email, password);
      }
      const user = userCredential.user;
      sendEmailNotification(user, isLogin ? "Login" : "Signup");
      onClose();
      navigate("/profile");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login instead.");
      } else {
        setError(err.message.replace("Firebase: ", ""));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      const result = await loginWithGoogle();
      const user = result.user;
      sendEmailNotification(user, "Google Login");
      onClose();
      navigate("/profile");
    } catch (err) {
      setError("Failed to sign in with Google.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{styles}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lm-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              className="lm-card"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top gradient bar */}
              <div className="lm-topbar" />

              {/* Header */}
              <div className="lm-header">
                <button className="lm-close" onClick={onClose} aria-label="Close">
                  <X size={14} />
                </button>

                <div className="lm-logo-wrap">
                  <img src={logo} alt="Hyglam" className="lm-logo" />
                </div>



                <div className="lm-divider">
                  <div className="lm-divider-line" />
                  <div className="lm-divider-diamond" />
                  <div className="lm-divider-line" />
                </div>
              </div>

              {/* Body */}
              <div className="lm-body">
                {/* Tabs */}
                <div className="lm-tabs">
                  <button
                    type="button"
                    className={`lm-tab ${isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(true)}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className={`lm-tab ${!isLogin ? "active" : ""}`}
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleAuth}>
                  {/* Email */}
                  <div className="lm-field">
                    <label className="lm-label">Email Address</label>
                    <input
                      className="lm-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Phone – signup only */}
                  <AnimatePresence>
                    {!isLogin && (
                      <motion.div
                        className="lm-field"
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <label className="lm-label">Mobile Number</label>
                        <input
                          className="lm-input"
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Password */}
                  <div className="lm-field">
                    <label className="lm-label">Password</label>
                    <div className="lm-input-wrap">
                      <input
                        className="lm-input has-icon"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        required
                        autoComplete={isLogin ? "current-password" : "new-password"}
                      />
                      <button
                        type="button"
                        className="lm-icon-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="lm-captcha-box">
                    <span className="lm-captcha-label">Verify</span>
                    <span className="lm-captcha-eq">
                      {num1} + {num2} =
                    </span>
                    <input
                      className="lm-captcha-input"
                      type="number"
                      value={userAnswer}
                      onChange={handleCaptchaChange}
                      placeholder="?"
                      min="0"
                    />
                    <AnimatePresence>
                      {isCaptchaValid && (
                        <motion.div
                          className="lm-captcha-check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <Check size={13} color="#0a0a0a" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        className="lm-error"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="lm-btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                  </button>
                </form>

                {/* Divider */}
                <div className="lm-sep">or continue with</div>

                {/* Google */}
                <button
                  type="button"
                  className="lm-btn-google"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  {/* Google G icon inline SVG */}
                  <svg className="lm-google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </button>

                {/* Footer */}
                <div className="lm-footer">
                  {isLogin ? "New to Hyglam?" : "Already have an account?"}
                  <button
                    type="button"
                    className="lm-footer-link"
                    onClick={() => { setIsLogin(!isLogin); setError(""); }}
                  >
                    {isLogin ? "Create Account" : "Sign In"}
                  </button>
                </div>

                <div className="lm-bottombar" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
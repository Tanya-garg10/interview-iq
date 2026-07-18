import dotenv from "dotenv"
dotenv.config()

let razorpay = null;

try {
  const { default: Razorpay } = await import("razorpay");
  if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== 'rzp_test_dummy') {
    razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  } else {
    console.warn("⚠️  Razorpay running in mock mode (no valid keys provided)");
  }
} catch (err) {
  console.warn("⚠️  Razorpay init failed:", err.message);
}

export default razorpay;
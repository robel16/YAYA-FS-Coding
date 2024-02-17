import axios from "axios";
import CryptoJS from "crypto-js";

const API_KEY = "key-test_493e9539-3765-493a-864d-1082e2636168";
const API_SECRET =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5Ijoia2V5LXRlc3RfNDkzZTk1MzktMzc2NS00OTNhLTg2NGQtMTA4MmUyNjM2MTY4Iiwic2VjcmV0IjoiMDUyOTNjMGU1MDlhOWE4ODRiMDVhMWYwZjkzYjdiNjMzMmE1NDUwMSJ9.is7GgbMLZ_ZUT1He9DG1dtEs5CxfpkVlCco0Xo6mHQY";

const BASE_URL = "https://yayawallet.com/api/en";

const makeAuthenticatedRequest = async (
  apiKey,
  apiSecret,
  method,
  endpoint,
  body = {}
) => {
  const timestamp = Date.now();
  const preHash = `${timestamp}${method.toUpperCase()}${endpoint}${JSON.stringify(
    body
  )}`;
  const signature = CryptoJS.HmacSHA256(preHash, apiSecret).toString(
    CryptoJS.enc.Base64
  );

  const headers = {
    "Content-Type": "application/json",
    "YAYA-API-KEY": apiKey,
    "YAYA-API-TIMESTAMP": timestamp,
    "YAYA-API-SIGN": signature,
  };

  try {
    const response = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default makeAuthenticatedRequest;

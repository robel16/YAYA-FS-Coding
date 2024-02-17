import makeAuthenticatedRequest from './services/yayaApi';

const apiKey = 'key-test_493e9539-3765-493a-864d-1082e2636168';
const apiSecret = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5Ijoia2V5LXRlc3RfNDkzZTk1MzktMzc2NS00OTNhLTg2NGQtMTA4MmUyNjM2MTY4Iiwic2VjcmV0IjoiMDUyOTNjMGU1MDlhOWE4ODRiMDVhMWYwZjkzYjdiNjMzMmE1NDUwMSJ9.is7GgbMLZ_ZUT1He9DG1dtEs5CxfpkVlCco0Xo6mHQY';

const getProfileInformation = async () => {
  try {
    const profileData = await makeAuthenticatedRequest(apiKey, apiSecret, 'POST', 'user/profile', { account_name: '12-char-acct' });
    console.log('Profile Information:', profileData);
  } catch (error) {
    console.error('Error:', error);
  }
};

getProfileInformation();

/* Replace "YOUR_ADOBE_API_KEY" with your Api key 
and "YOUR_ADOBE_API_SECRET" with your API Secret */

const adobeApiKey = "c24dd851faa04bca9213a090f4e767b6";
const adobeApiSecret = "p8e-v-ulh1P_s3rcaed-bf4sL09Q_I7wFOvy";

try {
        if (module) {
                module.exports = {
                        adobeApiKey: adobeApiKey,
                        adobeApiSecret: adobeApiSecret,
                }
        }
}
catch (err) {}

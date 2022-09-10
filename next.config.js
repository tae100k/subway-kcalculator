import { BASE_URL } from "./api/APIURL";
import { isBrowser } from "react-device-detect";

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${isBrowser ? BASE_URL : BASE_URL_MOBILE}:path*`,
      },
    ];
  },
};

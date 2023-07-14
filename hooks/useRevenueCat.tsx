import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Purchases, {
  CustomerInfo,
  PurchasesOffering,
} from "react-native-purchases";

const APIKeys = {
  apple: "appl_nYKEnXzMLAzayRxFRtmONjyYKqJ",
};

function useRevenueCat() {
  const [currentOffering, setCurrentOffering] =
    useState<PurchasesOffering | null>(null);

  const [customInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const isProMember = customInfo?.activeSubscriptions.includes("proMonthly");

  useEffect(() => {
    const fetchData = async () => {
      Purchases.setDebugLogsEnabled(true);
      if (Platform.OS === "ios") {
        await Purchases.configure({ apiKey: APIKeys.apple });
      }
      const offerings = await Purchases.getOfferings();
      const customerInfo = await Purchases.getCustomerInfo();

      setCustomerInfo(customerInfo);
      setCurrentOffering(offerings.current);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const customerInfoUpdated = async (purchaserInfo: CustomerInfo) => {
      setCustomerInfo(purchaserInfo);
    };
    Purchases.addCustomerInfoUpdateListener(customerInfoUpdated);
  }, []);
  return { currentOffering, customInfo, isProMember };
}

export default useRevenueCat;

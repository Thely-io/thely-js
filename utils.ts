import { countries, getCountryCode } from "countries-list";

export const useCountries = () => {
  return Object.values(countries).map((country) => ({
    value: getCountryCode(country.name) as string,
    name: country.name,
  }));
};

export function convertToTwoLetterCode(input: string) {
  const countryCodes: Record<string, any> = {
    "united states": "us",
    usa: "us",
    canada: "ca",
  };

  // Check if the input is a country name
  if (countryCodes.hasOwnProperty(input)) {
    return countryCodes[input];
  }

  // Check if the input is a 3-letter country code (uppercase)
  for (const countryName in countryCodes) {
    if (countryCodes[countryName] === input.toUpperCase()) {
      return countryCodes[countryName];
    }
  }

  // If no match is found, return undefined or any other suitable value
  return undefined;
}

// We use apple for this :)
export const getTrackingURL = (carrier: string, trackingNumber: string) => {
  return `https://trackingshipment.apple.com/?Company=${carrier}&Locale=&TrackingNumber=${trackingNumber}`;
};

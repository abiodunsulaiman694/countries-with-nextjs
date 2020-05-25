import { Box, Badge, Image } from "@chakra-ui/core";

const Country = ({ country }) => (
  <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
    <Image src={country.flag?.svgFile} alt={country.nativeName} />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        {country.currencies &&
          country.currencies.map((currency) => (
            <Badge rounded="full" px="2" variantColor="teal" key={currency._id}>
              {currency.code} &bull;
            </Badge>
          ))}
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {country.capital} &bull;
          {country.timezones &&
            country.timezones.map((timezone) => (
              <span key={timezone._id}>{timezone.name} &bull;</span>
            ))}
        </Box>
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {country.name}
      </Box>

      <Box>
        {country.populationDensity}
        <Box as="span" color="gray.600" fontSize="sm">
          / sqKm
        </Box>
      </Box>

      {country.officialLanguages &&
        country.officialLanguages.map((language) => (
          <Box as="span" color="gray.600" fontSize="sm" key={language._id}>
            <span>{language.name}</span> &bull;
          </Box>
        ))}
    </Box>
  </Box>
);
export default Country;

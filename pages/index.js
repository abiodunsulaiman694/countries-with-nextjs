import Head from "next/head";
import { Heading, Grid, Alert, AlertIcon } from "@chakra-ui/core";
import { request } from "graphql-request";
import useSWR from "swr";
import Layout from "../components/layout";
import Country from "../components/country";

const API_ENDPOINT = "https://countries-274616.ew.r.appspot.com/";
const countriesQuery = `query getCountries{
  Country{
    _id
    name
    capital
    populationDensity
    currencies {
      _id
      code
    }
    timezones {
        _id
      name
    }
    officialLanguages {
      _id
      name
    }
    flag {
      _id
      svgFile
    }
  }
}`;

export default function Home() {
  const { data: countries, error } = useSWR(countriesQuery, (query) =>
    request(API_ENDPOINT, query)
  );
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <Layout>
        <Heading size="2xl" as="center">
          Countries
        </Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        )}
        <Grid templateColumns="repeat(3, 1fr)" ml="10" mr="10" gap={6}>
          {countries &&
            countries.Country &&
            countries.Country.map((country) => (
              <Country country={country} key={country._id} />
            ))}
        </Grid>
      </Layout>
    </>
  );
}

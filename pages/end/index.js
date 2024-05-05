import { useState, useEffect } from "react";
import Layout from "@/Components/Layout";
import styles from "./end.module.css";
import axios from "axios";
import Link from "next/link";
import { dateToStringFormat } from "../../helper/util";
import { Select } from "@/Components/Select";

export default function End() {
  const API_KEY = process.env.NEXT_PUBLIC_CARBON_API_KEY;
  const stateOptions = [
    {
      value: "ab",
      label: "Alberta",
    },
    {
      value: "bc",
      label: "British Columbia",
    },
    {
      value: "on",
      label: "Ontario",
    },
  ];
  const keyword = "climate change";
  const [state, setState] = useState(stateOptions[0]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callCarbonApi = () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      data: {
        type: "electricity",
        electricity_unit: "mwh",
        electricity_value: 42,
        country: "ca",
        state: state.value,
      },
      url: "https://www.carboninterface.com/api/v1/estimates",
    };
    axios(options)
      .then(function (response) {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    callCarbonApi();
  }, []);

  useEffect(() => {
    callCarbonApi();
  }, [state]);

  return (
    <Layout>
      <section className={styles.end}>
        <div className={styles.text}>
          <p>Thank you!</p>
        </div>
        <section className={styles.contentsContainer}>
          <h2>
            <Select
              selected={state}
              options={stateOptions}
              onChange={(option) => {
                setState(option);
              }}
            />{" "}
            carbon states
          </h2>

          <div className={styles.contents}>
            {isLoading ? (
              <div className={styles.loading}>LOADING...</div>
            ) : data?.attributes ? (
              <div>
                <ul>
                  <li>
                    estimated at :{" "}
                    {dateToStringFormat(new Date(data.attributes.estimated_at))}
                  </li>
                  <li>carbon(g): {data.attributes.carbon_g}</li>
                  <li>carbon(kg): {data.attributes.carbon_kg}</li>
                  <li>carbon(lb): {data.attributes.carbon_lb}</li>
                  <li>carbon(mt): {data.attributes.carbon_mt}</li>
                </ul>
              </div>
            ) : (
              <div className={styles.error}>fails loading news</div>
            )}
          </div>
        </section>
      </section>
    </Layout>
  );
}
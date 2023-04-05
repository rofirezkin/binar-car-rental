import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import Navbar from "../../components/Navbar";
import Search from "../Car/Search";
import "./style.css";
import ICGroup from "../../assets/fi_users_d.png";
import { NumericFormat } from "react-number-format";

function DetailCar() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get(`${api.user}/car/${id}`).then((res) => {
      console.log("res ", res);
      setDetail(res.data);
    });
  }, [id]);
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#f1f3ff", height: 100 }}></div>
      <div className="container  px-3">
        <Search data={detail} disabled={true} detail={true} />
        <div className="pt-4">
          <div className="row">
            <div className="col-7 ">
              <div className="border-box">
                <h2 className="text-subtitle">Tentang Paket</h2>
                <h2 className="text-subtitle">Include</h2>
                <ul>
                  <li className="text-list">
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li className="text-list">
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li className="text-list">Sudah termasuk Tiket Wisata</li>
                  <li className="text-list">Sudah termasuk pajak</li>
                </ul>
                <h2 className="text-subtitle">Exclude</h2>
                <ul>
                  <li className="text-list">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="text-list">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="text-list">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                </ul>
                <h2 className="text-subtitle">Refund, Reschedule, Overtime</h2>
                <ul>
                  <li className="text-list">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="text-list">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="text-list">
                    Tidak termasuk akomodasi penginapan
                  </li>
                  <li className="text-list">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="text-list">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-5 px-5">
              <div className="border-box">
                <img src={detail.image} alt="car" style={{ width: "100%" }} />
                <h4 className="text-subtitle">{detail.name}</h4>
                <div className="d-flex">
                  <div style={{ justifyContent: "center" }}>
                    <img
                      src={ICGroup}
                      alt="user"
                      style={{
                        width: 12,
                        height: 12,
                        marginBottom: 5,
                        marginRight: 10,
                      }}
                    />
                  </div>
                  <h6 className="text-list">
                    {detail.category === "small"
                      ? "2 - 4"
                      : detail.category === "medium"
                      ? "4 - 6"
                      : "6 - 8"}{" "}
                    Orang
                  </h6>
                </div>

                <p className="text-subtitle d-inline">Total </p>
                <NumericFormat
                  className="text-subtitle float-right"
                  value={detail.price}
                  prefix="Rp. "
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCar;

import axios from "axios";
import React, { memo, useState } from "react";
import { api } from "../../api";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { category, harga, status } from "../../constants";
import "./style.css";

function Search({ setData, detail, disabled, data }) {
  const [name, setName] = useState("");
  const [categoryD, setCategoryD] = useState("");
  const [isRented, setIsRented] = useState("");
  const [price, setPrice] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const searchCar = () => {
    let apiSearch = `${api.user}/v2/car?page=1&pageSize=10`;

    // Menambahkan parameter ke URL API berdasarkan kondisi
    if (name !== "") {
      apiSearch += `&name=${name}`;
    }

    if (categoryD !== "") {
      apiSearch += `&category=${categoryD}`;
    }

    if (isRented !== "") {
      apiSearch += `&isRented=${isRented}`;
    }

    if (price !== "") {
      console.log("price", typeof price);
      switch (price) {
        case "400000":
          console.log("ibi 50000");
          apiSearch += `&maxPrice=${price}`;
          break;
        case "600000":
          apiSearch += `&minPrice=40000&maxPrice=${price}`;
          break;
        case "800000":
          apiSearch += `&minPrice=${price}`;
          break;

        default:
          break;
      }
    }

    // Menggunakan URL API yang telah diperbarui
    console.log("api search", apiSearch);
    setIsFocused(false);
    axios(apiSearch)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  return (
    <>
      <div
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          marginTop: -50,
          padding: 10,
          position: "relative",
          backgroundColor: "white",
          zIndex: 999999,
          boxShadow: "1px 2px 9px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="row">
          <div className="col-3">
            <div className="p-2">
              <span>Nama Mobil</span>
              <TextField
                value={data?.name}
                disabled={disabled}
                placeholder="Ketik Nama/tipe mobil"
                onChange={(e) => setName(e)}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="p-2">
              <span>Kategori</span>
              <Select
                value={data?.category}
                disabled={disabled}
                placeholder="Masukan Kapasitas Mobil"
                items={category}
                onChange={(value) => setCategoryD(value)}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="p-2">
              <span>Harga</span>
              {detail === true ? (
                <TextField
                  value={data?.price}
                  disabled={disabled}
                  placeholder="Ketik Nama/tipe mobil"
                  onChange={(e) => setName(e)}
                />
              ) : (
                <Select
                  disabled={disabled}
                  placeholder="Masukan Harga Sewa per Hari"
                  items={harga}
                  onChange={(value) => setPrice(value)}
                />
              )}
            </div>
          </div>
          {detail === true ? (
            <div className="col-3">
              <div className="p-2">
                <span>Status</span>
                <Select
                value={detail.status}
                  placeholder="Masukan Harga Sewa per Hari"
                  items={harga}
                  onChange={(value) => setPrice(value)}
                />
              </div>
            </div>
          ) : (
            <div className="row col-3">
              <div className="col-8">
                <div className="p-2">
                  <span>Status </span>
                  <Select
                    placeholder="pilih status "
                    items={status}
                    onChange={(value) => setIsRented(value)}
                  />
                </div>
              </div>
              <div
                className="col-4"
                style={{
                  flex: 1,
                  position: "relative",
                }}
              >
                <button
                  style={{ position: "absolute", bottom: 7 }}
                  onClick={searchCar}
                  type="button"
                  className="btn btn-success p-2"
                >
                  Cari
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isFocused && <div className="overlay"></div>}
    </>
  );
}

export default memo(Search);

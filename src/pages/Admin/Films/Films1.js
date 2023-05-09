import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";

export default function Films1(props) {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log("adminList Film", { arrFilmDefault });
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  const data = arrFilmDefault;
  const [state, setState] = useState({
    searchText: "",
    searchedColumn: "",
  });

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            state.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => state.searchInput.select(), 100);
      }
    },
    render: (text) =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  ////
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setState({ searchText: "" });
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
      width: "15%",
      ...getColumnSearchProps("maPhim"),
    },
    {
      title: "Hình ảnh ",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://picsum.photos/id/${index}/100/100`;
              }}
            />
          </Fragment>
        );
      },
      key: "hinhAnh",
      width: "15%",
      //   ...getColumnSearchProps('hinhAnh'),
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      ...getColumnSearchProps("tenPhim"),

      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 100
              ? film.moTa.substr(0, 100) + "..."
              : film.moTa}
          </Fragment>
        );
      },
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
      // ...getColumnSearchProps('moTa'),

      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",

      render: (text, film) => {
        return (
          <Fragment>
            {
              <div className="flex gap-4">
                <NavLink
                  to={`/admin/Films/edit/${film.maPhim}`}
                  key={1}
                  className="text-2xl "
                >
                  <EditOutlined style={{ color: "#006400" }} />
                </NavLink>
                <span
                  key={2}
                  style={{ cursor: "pointer" }}
                  className="text-2xl "
                  onClick={() => {
                    //goi action xóa
                    if (
                      window.confirm(
                        "Bạn có chắc muốn xóa phim " + film.tenPhim
                      )
                    ) {
                      //gọi action
                      dispatch(xoaPhimAction(film.maPhim));
                    }
                  }}
                >
                  <DeleteOutlined style={{ color: "red" }} />
                </span>
                <NavLink
                  to={`/admin/showtime/${film.maPhim}/${film.biDanh}`}
                  key={3}
                  className="text-2xl "
                >
                  <CalendarOutlined
                    style={{ color: "green" }}
                    onClick={() => {
                      localStorage.setItem("filmParams", JSON.stringify(film));
                    }}
                  />
                </NavLink>
              </div>
            }
          </Fragment>
        );
      },
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "10%",
    },
  ];
  return (
    <div>
      <h3 className="text-center text-2xl">Danh sách phim</h3>
      <button
        className="btn btn-outline-success mb-3"
        onClick={() => {
          history.push("/admin/Films/addnew");
        }}
      >
        Thêm phim
      </button>
      <Table columns={columns} dataSource={data} rowKey={"maPhim"} />
    </div>
  );
}

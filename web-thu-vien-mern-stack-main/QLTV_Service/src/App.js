import React, { useState, useRef } from "react";
import { Collapse, Divider, List, Typography, Input, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import axios from "axios";
import JsonDisplay from "./Json";
const { Text, Link, Title, Paragraph } = Typography;
const { Panel } = Collapse;

const { TextArea } = Input;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const [idUserGet, setIdUserGet] = useState("");
  const [idUserDelete, setIdUserDelete] = useState("");
  const [idUserDeleteResponse, setIdUserDeleteResponse] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [userUpdate, setuserUpdate] = useState("");
  const [userAddResponse, setUserAddResponse] = useState("");
  const [userUpdateResponse, setUserUpdateResponse] = useState("");
  const jsonUser = {
    address: "",
    photo: "",
    points: 0,
    activeTransactions: [],
    prevTransactions: [],
    isAdmin: false,
    userType: "student",
    userFullName: "Hà Văn Chi",
    age: 24,
    dob: "05/12/1999",
    gender: "Nam",
    mobileNumber: 944413922,
    email: "chi11@test.com",
    password: "123456",
  };

  const jsonUserupdate = {
    address: "",
    photo: "",
    points: 0,
    activeTransactions: [],
    prevTransactions: [],
    isAdmin: false,
    _id: "65dd52ad5ef7d4304c97fbeb",
    userType: "student",
    userFullName: "chiChi",
    age: 22,
    dob: "05/12/2000",
    gender: "Nam",
    mobileNumber: 944413922,
    email: "chi112@test.com",
    password: "$2b$10$LE/f/PujUZ1GKWFaPnNCl.UlNfrmruZqexXOy4rNW6JgzIYp6on0e",
    createdAt: "2024-02-27T03:10:37.632Z",
    updatedAt: "2024-02-27T03:10:37.632Z",
    __v: 0,
  };
  const jsonBook = {
    language: "vi",
    image_url: "3563-lookat.png",
    publisher: "nxb hoa hong",
    description: "",
    categories: "Công Nghệ Thông Tin",
    bookName: "testadd",
    author: "kiet",
    bookCountAvailable: 10,
    bookStatus: "Sẵn có",
  };
  const jsonBookUpdate = {
    language: "vi",
    image_url: "3563-lookat.png",
    publisher: "nxb hoa hong",
    description: "",
    bookStatus: "Sẵn có",
    categories: "Công Nghệ Thông Tin - dieukhien22",
    transactions: [],
    _id: "65dd7dc0cd589405947d739c",
    bookName: "testadd",
    author: "kiet",
    bookCountAvailable: 10,
    createdAt: "2024-02-27T06:14:24.644Z",
    updatedAt: "2024-02-27T06:14:24.644Z",
    __v: 0,
  };
  const Jsoncategories = {
    books: ["6494ff42fd7d0d0ba4901ab9"],
    categoryName: "Giáo dục 3",
    __v: 0,
  };
  const JsonTransactions = {
    transactionStatus: "Active",
    _id: "649556ddd0cc9413dc4670a4",
    bookId: "65dd80e3d2602d6ad03162a1",
    borrowerId: null,
    transactionType: "Issued",
    fromDate: "06/23/2023",
    toDate: "06/24/2023",
  };

  const JsonTransactionsUpdate = {
    transactionStatus: "Active",
    _id: "649556ddd0cc9413dc4670a4",
    bookId: "6495000dfd7d0d0ba4901f59",
    borrowerId: null,
    bookName: "Dị Ứng – Miễn Dịch Lâm Sàng",
    transactionType: "Issued",
    fromDate: "06/23/2023",
    toDate: "06/24/2023",
    createdAt: "2023-06-23T08:25:01.528Z",
    updatedAt: "2023-06-23T08:25:01.528Z",
    __v: 0,
  };
  const Jsonsignin = {
   
    "email": "chi11@test.com",
    "password": "123456"
  };
  const jsonRef = useRef(null);

  const copyJson = () => {
    if (jsonRef.current) {
      const range = document.createRange();
      range.selectNode(jsonRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
  };
  return (
    <Collapse accordion onChange={onChange}>
      <Panel header="User" key="1">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <>
                  <Text type="success" level={3}>
                    [GET]
                  </Text>
                </>
              }
              title={
                <a href="http://localhost:5000/api/users/allmembers">
                  http://localhost:5000/api/users/allmembers
                </a>
              }
              description="This api use for getting list all of users"
            />
          </List.Item>

          <List.Item>
            <List.Item.Meta
              avatar={<Text type="success">[Get]</Text>}
              title={
                <a href="http://localhost:5000/api/users/getuser/id">
                  http://localhost:5000/api/users/getuser/:id
                </a>
              }
              description={
                <>
                  <div>This api use for getting information of user</div>
                  {/* <div className='flex'>
                  <Input
                    onChange={(value) => {
                      console.log(value.target.value)
                      setIdUserGet(value.target.value)
                    }}
                    placeholder="input id of user"
                  />
                  <Button onClick={() => { window.location.href = `http://localhost:5000/api/users/getuser/${idUserGet}` }} className='ml-4'>Get</Button>
                </div> */}
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/users/adduser">
                  http://localhost:5000/api/users/adduser
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new user</div>
                  {/* <div className='flex'>
                  {/* <TextArea
                    onChange={(input) => setUserAdd(input.target.value)}
                    placeholder="input json data"
                    style={{ height: 200, resize: 'none' }}
                  /> */}

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(jsonUser, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                  {/* <Button onClick={async () => {
                    const res = await axios.post("http://localhost:5000/api/users/adduser", JSON.parse(userAdd));
                    setUserAddResponse(JSON.stringify(res.data))
                  }} className='mx-4'>Post</Button>
                  <TextArea
                    value={userAddResponse}
                    onChange={() => { }}
                    placeholder="json data return"
                    style={{ height: 200, resize: 'none' }}
                  /> */}
                  {/* </div> */}
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="secondary">[Put]</Text>}
              title={
                <a href="http://localhost:5000/api/users/updateuser/id">
                  http://localhost:5000/api/users/updateuser/id
                </a>
              }
              description={
                <>
                  <div>This api use for updating information of user</div>
                  {/* <div className='flex'>
                  <TextArea
                    onChange={(input) => setuserUpdate(input.target.value)}
                    placeholder="input json data"
                    style={{ height: 200, resize: 'none' }}
                  />
                  <Button onClick={async () => {
                    console.log('check', (userUpdate))
                    // console.log('check', JSON.parse(userUpdate))
                    const res = await axios.put(("http://localhost:5000/api/users/updateuser/" + JSON.parse(userUpdate)._id), JSON.parse(userUpdate));
                    // window.location.pathname = "api-response"

                    setUserUpdateResponse(res.data)
                  }} className='mx-4'>Update</Button>
                  <TextArea
                    onChange={() => { }}
                    value={userUpdateResponse}
                    placeholder="json data return"
                    style={{ height: 200, resize: 'none' }}
                  />
                </div> */}

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(jsonUserupdate, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="danger">[Delete]</Text>}
              title={
                <a href="http://localhost:5000/api/users/deleteuser/id">
                  http://localhost:5000/api/users/deleteuser/id
                </a>
              }
              description={
                <>
                  <div>This api use for deleting a user</div>
                  {/* <div className='flex'>
                  <Input
                    onChange={(input) => { setIdUserDelete(input.target.value); }}
                    placeholder="input id of user"
                  />
                  <Button onClick={async () => {
                    const res = await axios.delete(("http://localhost:5000/api/users/deleteuser/id?id=" + (idUserDelete)));

                    setIdUserDeleteResponse(res.data)
                  }} className='mx-4'>Delete</Button>
                  <Input
                    onChange={() => { }}
                    value={idUserDeleteResponse}
                    placeholder="json data return"
                  // style={{ height: 200, resize: 'none' }}
                  />
                </div> */}
                </>
              }
            />
          </List.Item>
        </List>
      </Panel>
      <Panel header="Books" key="2">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <>
                  <Text type="success" level={3}>
                    [GET]
                  </Text>
                </>
              }
              title={
                <a href="http://localhost:5000/api/books/allbooks">
                  http://localhost:5000/api/books/allbooks
                </a>
              }
              description="This api use for getting list all of books"
            />
          </List.Item>

          <List.Item>
            <List.Item.Meta
              avatar={<Text type="success">[Get]</Text>}
              title={
                <a href="http://localhost:5000/api/books/get20book">
                  http://localhost:5000/api/books/get20book
                </a>
              }
              description={
                <>
                  <div>This api use for getting list 20 books</div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="success">[Get]</Text>}
              title={
                <a href="http://localhost:5000/api/books/getbook/:id">
                  http://localhost:5000/api/books/getbook/:id
                </a>
              }
              description={
                <>
                  <div>This api use for getting information of book</div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="success">[Get]</Text>}
              title={
                <a href="http://localhost:5000/api/books/getallcate">
                  http://localhost:5000/api/books/getallcate
                </a>
              }
              description={
                <>
                  <div>This api use for Get Book by category name</div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="success">[Get]</Text>}
              title={
                <a href="http://localhost:5000/api/books/search/:keyword">
                  http://localhost:5000/api/books/search/:keyword
                </a>
              }
              description={
                <>
                  <div>This api use for Search Book by keyword</div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/books/addbook">
                  http://localhost:5000/api/books/addbook
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new book</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(jsonBook, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="secondary">[Put]</Text>}
              title={
                <a href="http://localhost:5000/api/books/updatebook/:id">
                  http://localhost:5000/api/books/updatebook/:id
                </a>
              }
              description={
                <>
                  <div>This api use for updating information of book</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(jsonBookUpdate, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="danger">[Delete]</Text>}
              title={
                <a href="http://localhost:5000/api/books/removebook/:id">
                  http://localhost:5000/api/books/removebook/:id
                </a>
              }
              description={
                <>
                  <div>This api use for deleting a book</div>
                </>
              }
            />
          </List.Item>
        </List>
      </Panel>
      <Panel header="Categories" key="3">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <>
                  <Text type="success" level={3}>
                    [GET]
                  </Text>
                </>
              }
              title={
                <a href="http://localhost:5000/api/categories/allcategories">
                  http://localhost:5000/api/categories/allcategories
                </a>
              }
              description="This api use for getting list all of categories"
            />
          </List.Item>

          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/categories/addcategory">
                  http://localhost:5000/api/categories/addcategory
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new book</div>
                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(Jsoncategories, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
        </List>
      </Panel>
      <Panel header="Statistics" key="4">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <>
                  <Text type="success" level={3}>
                    [GET]
                  </Text>
                </>
              }
              title={
                <a href="http://localhost:5000/api/statistics/bookusertrans">
                  http://localhost:5000/api/statistics/bookusertrans
                </a>
              }
              description="This api use for getting list all of books"
            />
          </List.Item>
        </List>
      </Panel>
      <Panel header="Transactions" key="5">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <>
                  <Text type="success" level={3}>
                    [GET]
                  </Text>
                </>
              }
              title={
                <a href="http://localhost:5000/api/transactions/all-transactions">
                  http://localhost:5000/api/transactions/all-transactions
                </a>
              }
              description="This api use for getting list all transactions"
            />
          </List.Item>

          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/transactions/add-transaction">
                  http://localhost:5000/api/transactions/add-transaction
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new transaction</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(JsonTransactions, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="secondary">[Put]</Text>}
              title={
                <a href="http://localhost:5000/api/transactions/update-transaction/:id">
                  http://localhost:5000/api/transactions/update-transaction/:id
                </a>
              }
              description={
                <>
                  <div>This api use for updating information of book</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(JsonTransactionsUpdate, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="danger">[Delete]</Text>}
              title={
                <a href="http://localhost:5000/api/transactions/remove-transaction/:id">
                  http://localhost:5000/api/transactions/remove-transaction/:id
                </a>
              }
              description={
                <>
                  <div>This api use for deleting a book</div>
                </>
              }
            />
          </List.Item>
        </List>
      </Panel>

      <Panel header="Auth" key="6">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/auth/register">
                  http://localhost:5000/api/auth/register
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new transaction</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(jsonUser, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Text type="warning">[Post]</Text>}
              title={
                <a href="http://localhost:5000/api/auth/signin">
                  http://localhost:5000/api/auth/signin
                </a>
              }
              description={
                <>
                  <div>This api use for creating a new transaction</div>

                  <div style={{ position: "relative" }}>
                    <div
                      ref={jsonRef}
                      contentEditable={true}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        outline: "none",
                        minHeight: "50px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      {JSON.stringify(Jsonsignin, null, 2)}
                    </div>
                    <button
                      onClick={copyJson}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "5px 10px",
                        backgroundColor: "#1890ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <CopyOutlined />
                    </button>
                  </div>
                </>
              }
            />
          </List.Item>
        </List>
      </Panel>
    </Collapse>
  );
};

export default App;

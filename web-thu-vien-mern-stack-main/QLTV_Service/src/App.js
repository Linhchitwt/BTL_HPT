import React, { useState } from 'react';
import { Collapse, Divider, List, Typography, Input, Button } from 'antd';
import axios from "axios";
const { Text, Link, Title } = Typography;
const { Panel } = Collapse;

const { TextArea } = Input;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const [idUserGet, setIdUserGet] = useState('');
  const [idUserDelete, setIdUserDelete] = useState('');
  const [idUserDeleteResponse, setIdUserDeleteResponse] = useState('');
  const [userAdd, setUserAdd] = useState('');
  const [userUpdate, setuserUpdate] = useState('');
  const [userAddResponse, setUserAddResponse] = useState('');
  const [userUpdateResponse, setUserUpdateResponse] = useState('');

  return (
    <Collapse accordion onChange={onChange}>
      <Panel header="Books" key="4">
        <List>
          <List.Item

          >

            <List.Item.Meta
              avatar={<>
                <Text type="success" level={3}>[GET]</Text>
              </>
              }
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description="This api use for getting list all of users"
            />
          </List.Item>

          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="success" >[Get]</Text>}
              title={<a href="http://localhost:5000/api/users/adduser">http://localhost:5000/api/users/adduser</a>}
              description={<><div>
                This api use for getting information of user
              </div>
                <div className='flex'>
                  <Input
                    onChange={(value) => {
                      console.log(value.target.value)
                      setIdUserGet(value.target.value)
                    }}
                    placeholder="input id of user"
                  />
                  <Button onClick={() => { window.location.href = `http://localhost:5000/api/users/getuser/${idUserGet}` }} className='ml-4'>Get</Button>
                </div>
              </>}
            />

          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="warning" >[Post]</Text>}
              title={<a href="http://localhost:5000/api/users/adduser">http://localhost:5000/api/users/adduser</a>}
              description={<><div>
                This api use for creating a new user
              </div>
                <div className='flex'>
                  <TextArea
                    onChange={(input) => setUserAdd(input.target.value)}
                    placeholder="input json data"
                    style={{ height: 200, resize: 'none' }}
                  />
                  <Button onClick={async () => {
                    const res = await axios.post("http://localhost:5000/api/users/adduser", JSON.parse(userAdd));
                    setUserAddResponse(JSON.stringify(res.data))
                  }} className='mx-4'>Post</Button>
                  <TextArea
                    value={userAddResponse}
                    onChange={() => { }}
                    placeholder="json data return"
                    style={{ height: 200, resize: 'none' }}
                  />
                </div>
              </>}
            />

          </List.Item>
          <List.Item
          >

            <List.Item.Meta
              avatar={<Text type="secondary" >[Put]</Text>}
              title={<a href="http://localhost:5000/api/users/updateuser">http://localhost:5000/api/users/updateuser</a>}
              description={<><div>
                This api use for updating information of user
              </div>
                <div className='flex'>
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
                </div>
              </>}
            />

          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="danger" >[Delete]</Text>}
              title={<a href="http://localhost:5000/api/users/deleteuser/id">http://localhost:5000/api/users/deleteuser/id</a>}
              description={<><div>
                This api use for deleting a user
              </div>
                <div className='flex'>
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
                    style={{ height: 200, resize: 'none' }}
                  />
                </div>
              </>}
            />

          </List.Item>


        </List>
      </Panel>
    </Collapse>
  );
};

export default App;

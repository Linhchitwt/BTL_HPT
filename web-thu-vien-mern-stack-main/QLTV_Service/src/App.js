import React from 'react';
import { Collapse, Divider, List, Typography, Input, Button } from 'antd';
const { Text, Link, Title } = Typography;
const { Panel } = Collapse;

const { TextArea } = Input;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

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
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description={<><div>
                This api use for getting information of user
              </div>
                <div className='flex'>
                  <Input
                    onChange={onChange}
                    placeholder="input id of user"
                  />
                  <Button className='ml-4'>Get</Button>
                </div>
              </>}
            />

          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="warning" >[Post]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description={<><div>
                This api use for creating a new user
              </div>
                <div className='flex'>
                  <TextArea
                    onChange={onChange}
                    placeholder="input json data"
                    style={{ height: 200, resize: 'none' }}
                  />
                  <Button className='ml-4'>Post</Button>
                </div>
              </>}
            />

          </List.Item>
          <List.Item
          >

            <List.Item.Meta
              avatar={<Text type="secondary" >[Put]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description={<><div>
                This api use for updating information of user
              </div>
                <div className='flex'>
                  <TextArea
                    onChange={onChange}
                    placeholder="input json data"
                    style={{ height: 200, resize: 'none' }}
                  />
                  <Button className='ml-4'>Update</Button>
                </div>
              </>}
            />

          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="danger" >[Delete]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description={<><div>
                This api use for deleting a user
              </div>
                <div className='flex'>
                  <Input
                    onChange={onChange}
                    placeholder="input id of user"
                  />
                  <Button className='ml-4'>Delete</Button>
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

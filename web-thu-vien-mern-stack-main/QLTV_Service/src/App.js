import React from 'react';
import { Collapse, Divider, List, Typography } from 'antd';
const { Text, Link, Title } = Typography;
const { Panel } = Collapse;

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
              <Title type="success" level={3}>[GET]</Title>
              </>
            }
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="warning" >[Post]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

          </List.Item>
          <List.Item
          >

            <List.Item.Meta
              avatar={<Text type="secondary" >[Put]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

          </List.Item>
          <List.Item

          >

            <List.Item.Meta
              avatar={<Text type="danger" >[Delete]</Text>}
              title={<a href="http://localhost:5000/api/users/allmembers">http://localhost:5000/api/users/allmembers</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

          </List.Item>


        </List>
      </Panel>
    </Collapse>
  );
};

export default App;

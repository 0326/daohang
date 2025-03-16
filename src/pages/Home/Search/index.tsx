import React, { useEffect } from 'react';
import { Input, Segmented, Flex, Select } from 'antd';
import defaultEngines from './defaultEngines';

import './index.less'

const { Search } = Input;


const SearchInput: React.FC = () => {
  const [engines, setEngines] = React.useState<string[]>(defaultEngines.map((item) => item.name));
  const [selectedEngine, setSelectedEngine] = React.useState<string>(defaultEngines[0].name);
  const [searchEngines, setSearchEngines] = React.useState<{name: string, value: string}[]>(defaultEngines[0].children);
  const [searchEngine, setSearchEngine] = React.useState<{name: string, value: string}>(defaultEngines[0].children[0]);

  useEffect(() => {
    const engines = defaultEngines.map((item) => item.name);
    setEngines(engines);
  }, []);

  useEffect(() => {
    const ses = defaultEngines.find((item) => item.name === selectedEngine);
    if (ses?.children) {
      setSearchEngines(ses.children);
      setSearchEngine(ses.children[0]);
    }
  }, [engines, selectedEngine]);

  const onSearch = (value: string) => {
    console.log('Search value:', value, searchEngine);
    const url = searchEngine.value + value;
    window.open(url, '_blank');
  };

  return (
    <Flex vertical justify='center' align='center' className="search-input-container">
      <Segmented<string>
        options={engines}
        size='large'
        shape='round'
        value={selectedEngine}
        onChange={setSelectedEngine}
      />
      <Search
        placeholder="请输入搜索内容"
        enterButton="搜索"
        className="search-input-assemble"
        size="large"
        variant="outlined"
        onSearch={onSearch}
        addonBefore={(
          <Select value={searchEngine.value} onChange={(v) => {
            const se = searchEngines.find((item) => item.value === v);
            console.log('se', se, v);
            if (se) {
              setSearchEngine(se);
            }
          }}>
            {searchEngines.map((item) => (
              <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
            ))}
          </Select>
        )}
      />
    </Flex>

  );
};

export default SearchInput;

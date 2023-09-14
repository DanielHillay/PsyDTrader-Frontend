import React, { useCallback } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from './icons';


function Selector({
    data,
    defaultButtonText,
    buttonStyle,
    setSelectedItem,
    buttonTextAfterSelection,
    dropdownIconPosition = "right",
    dropdownIconColor = "#D9DDE3",
    dropdownIconSize = 25,
  }) {
    const onSelect = useCallback(
      (item, index) => {
        setSelectedItem(item);
        console.log(item, index);
      },
      [setSelectedItem]
    );
  
    return (
      <SelectDropdown
        data={data}
        defaultButtonText={defaultButtonText}
        onSelect={(setSelectedItem, index) => {
            console.log(setSelectedItem, index);
          }}
          buttonTextAfterSelection={(setSelectedItem, index) => {
            return setSelectedItem
          }}
        buttonTextStyle={{
          backgroundColor: '#202328',
          borderColor: '#D9DDE3',
          borderWidth: 1,
          width: 380,
          height: 56,
          borderRadius: 8,
          color: '#202328',
          marginTop: 10,
          buttonStyle
        }}
        renderDropdownIcon={() => (
          <FontAwesome 
            name={"caret-down"}
            size={dropdownIconSize}
            color={dropdownIconColor}
          />
        )}
        dropdownIconPosition={dropdownIconPosition}
      />
    );
  }
  
  export default Selector;
  
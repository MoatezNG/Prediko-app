/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const customStyles = {
  option: (provided: any, state: any) => {
    const focusedControlStyles = {
      backgroundColor: 'rgba(197, 239, 247, 1)',
      color: 'inherit',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      padding: '8px 12px',
      width: '17.375rem',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    };
    const selectedControlStyles = {
      backgroundColor: 'rgba(13, 110, 253)',
      color: 'white',
      cursor: 'default',
      display: 'block',
      fontSize: 'inherit',
      padding: '8px 12px',
      width: '17.375rem',
      userSelect: 'none',
    };

    if (state.isSelected) return selectedControlStyles;
    if (state.isFocused) return focusedControlStyles;

    return provided;
  },
  singleValue: (provided: any) => ({
    ...provided,
    color: 'rgba(0,0,0,1)',
  }),
  menu: (provided: any) => ({
    ...provided,
    width: '17.375rem',
  }),
  control: (__provided: any, _state: any) => {
    const focusedControlStyles = {
      alignItems: 'center',
      borderColor: 'rgba(143, 146, 161, 0.2)',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 2,
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: 48,
      outline: '0 !important',
      position: 'relative',
      transition: 'all 100ms',
      width: '17.375rem',
    };

    return focusedControlStyles;
  },
};

export default customStyles;

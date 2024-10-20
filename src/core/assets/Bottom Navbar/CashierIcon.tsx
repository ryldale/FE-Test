type PropTypes = {
  fillColor?: string;
};

const CashierIcon = ({ fillColor = "#888888" }: PropTypes) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8401 3.68164C18.8051 3.68164 20.4138 5.24689 20.4933 7.20064L20.4963 7.35139L20.4948 7.98289L20.8616 7.98364C22.0863 7.98364 23.0898 8.95039 23.1551 10.1631L23.1588 10.2891V16.1541C23.1588 17.4036 22.1801 18.4274 20.9523 18.4941L20.8241 18.4979L20.4933 18.4986C20.4258 20.1486 19.1058 21.4799 17.4641 21.5564L17.3141 21.5601H5.60882C3.58157 21.5601 1.92332 19.9454 1.84382 17.9294L1.84082 17.7771V6.98764C1.84082 5.21389 3.23957 3.76189 4.98782 3.68464L5.13407 3.68164H16.8393H16.8401ZM21.7278 12.9576C21.5321 13.0326 21.3236 13.0799 21.1061 13.0964L20.9411 13.1024H17.3171C16.8018 13.1024 16.3773 13.4984 16.3293 14.0031L16.3248 14.0991V16.0656C16.3248 16.5831 16.7193 17.0091 17.2218 17.0579L17.3171 17.0624H20.8233C21.2906 17.0624 21.6761 16.7046 21.7226 16.2471L21.7271 16.1549V12.9576H21.7278ZM18.6888 13.9964C19.2581 13.9964 19.7201 14.4584 19.7201 15.0284C19.7201 15.5984 19.2581 16.0596 18.6888 16.0596C18.1196 16.0596 17.6576 15.5976 17.6576 15.0284C17.6576 14.4584 18.1196 13.9964 18.6888 13.9964ZM20.8616 9.41914H20.4911L20.4866 11.5521C20.4896 11.5896 20.4918 11.6279 20.4933 11.6661L20.9418 11.6669C21.3468 11.6669 21.6806 11.3579 21.7233 10.9634L21.7278 10.8779V10.2906C21.7278 9.84064 21.3858 9.46939 20.9493 9.42514L20.8608 9.42064L20.8616 9.41914ZM16.8401 5.40439H5.13482C4.30157 5.40439 3.61682 6.05689 3.56132 6.87964L3.55757 6.98764V7.21489C3.55757 8.12239 4.30532 8.55814 5.03507 8.59414L5.13407 8.59639H17.3141C17.7753 8.59639 18.2156 8.69614 18.6123 8.87464L18.7796 8.95564V7.35139C18.7796 6.27814 17.9096 5.40439 16.8401 5.40439Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CashierIcon;

import React from "react";
import { DatePicker } from 'antd';
const Date:React.FC = () => {
    const { RangePicker } = DatePicker;
    return <RangePicker bordered={false} />
};

export default Date;
import React, {useEffect, useState} from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, Typography, Spin} from 'antd';
import store from "../../../Redux/Store/store";
import {useSelector, useDispatch} from "react-redux";
import {GetData} from "../../../Redux/Modules/getReducer";
import {Container} from "./styles";
// @ts-ignore
import editIcon from "../icons/document-editor.png";
// @ts-ignore
import deleteIcon from '../icons/delete.png';


interface Item {
    key: string;
    productName: string;
    amount: number;
    price: number;
    description: string;
    createdAt: number;
    status:string

}

interface Props {
    searchWord: string
}

interface DataType {
    id: string;
    productName: string;
    amount: number;
    price: number;
    description: string;
    createdAt: number;
    status:string
}


const originData: Item[] = [];
type RootState = ReturnType<typeof store.getState>

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
                                                       editing,
                                                       dataIndex,
                                                       title,
                                                       inputType,
                                                       record,
                                                       index,
                                                       children,
                                                       ...restProps
                                                   }) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item name={dataIndex} style={{margin: 0}} rules={[
                    {
                        required: true,
                        message: `Please Input ${title}!`,
                    },]}>
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


const EditableTable: React.FC<Props> = ({searchWord}) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const getData = useSelector((state: RootState) => state.getReducer.data)
    const loader = useSelector((state: RootState) => state.getReducer.loader)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetData())
    }, [dispatch])

    const filterData = getData.filter((data:DataType) => data.productName.toLowerCase().includes(searchWord.toLowerCase()) || data.amount === Number(searchWord)).map((value:Item)=>({...value,status:"pending"}))
    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({productName: '', amount: '', price: '', description: '', ...record});
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        }
        catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'ProductName',
            dataIndex: 'productName',
            editable: true,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            editable: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            editable: true,
        },
        {
            title: 'Description',
            dataIndex: 'price',
            editable: true,
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                <Typography.Link onClick={() => save(record.key)} style={{marginRight: 8}}>Save</Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
          </span>
                ) : (
                    <Typography.Link className={"action-column"} disabled={editingKey !== ''}
                                     onClick={() => edit(record)}>
                        <img className={"table-icon"} src={editIcon} alt={"edit"}/>
                    </Typography.Link>
                );
            },
        },
        {
            title: 'Delete',
            dataIndex: '',
            key: 'x',
            render: () => <a className={"action-column"}>
                <img className={"table-icon"} src={deleteIcon} alt={"edit"}/>
            </a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'x',
            render: (status: string) => {
                switch (status) {
                    case "pending":
                        return (
                            <div>
                                pending
                            </div>
                        )
                    case "success":
                        return (
                            <a>
                                <div className={"product-status"}>Status</div>
                            </a>
                        )
                    default:
                        return status;
                }
            },
        },
    ];

    // const mergedColumns = columns.map(col => {
    //     if (!col.editable) {
    //         return col;
    //     }

    //     return {
    //         ...col,
    //         onCell: (record: Item) => ({
    //             record,
    //             inputType: col.dataIndex === 'amount' ? 'number' : 'text',
    //             dataIndex: col.dataIndex,
    //             title: col.title,
    //             editing: isEditing(record),
    //         }),
    //     };

    // });

    return (
        <Container>
            { loader ? <Spin className={'main-loader'} tip="Loading..."/> :
                <Form form={form} component={false}>
                    <Table className={"table"}
                           components={{body: {cell: EditableCell,},}}
                           bordered
                           dataSource={filterData}
                           columns={columns}
                           rowClassName="editable-row"
                           pagination={{onChange: cancel,}}/>
                </Form>
            }
        </Container>
    );
};

export default EditableTable;
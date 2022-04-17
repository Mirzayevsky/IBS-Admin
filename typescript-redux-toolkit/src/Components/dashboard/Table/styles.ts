import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid gray;
  th:nth-child(5){
    text-align: center!important;
  }
  th:nth-child(6){
    text-align: center!important;
  }
  th:nth-child(7){
    text-align: center!important;
  }
  .action-column{
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .table-icon{
    height: 35px;
    width: 35px;
    margin: auto;
  }
  .product-status{
    text-align: center!important;
  }
  .main-loader{
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .table{
    height: 72vh;
    overflow: auto;
  }
`;
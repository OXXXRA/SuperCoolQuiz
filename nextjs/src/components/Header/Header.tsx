import React from "react";
import { LogOut, Plus } from "react-feather";
import styled from "styled-components";
import { Button, Input } from "../../ui";
import Link from "../Link";
import { openCreateRecordModal } from "./create-record-modal-state";
import AddRecordModal from "./CreateRecordModal";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;

  width: 100%;

  position: sticky;
  z-index: 10;
  top: 0;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 7px rgba(64, 64, 64, 0.2);
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const Header = () => {
  return (
    <Container>
      <div className="container d-flex align-center">
        <Input primary className="mr-2" placeholder="Поиск" />
        <div className="d-flex">
          <Button
            className="mr-2"
            onClick={() => openCreateRecordModal()}
            color="success"
            width="40px"
            height="40px"
            fab
          >
            <Plus />
          </Button>
          <Avatar />
        </div>
      </div>
      <AddRecordModal />
    </Container>
  );
};

export default Header;

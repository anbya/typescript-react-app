import React, { useState } from 'react';
import Typography from "../../components/Typpgraphy/Typography";
import {
    Button,
    Input,
    InputGroup,
    InputGroupText,
    ButtonDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { MdMenu } from "react-icons/md";

const ButtonPage: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div style={{ padding: "20px", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
            <h1>Form Input Examples</h1>
            <div style={{ marginBottom: "20px" }}>
                <Typography variant="h6">Default input</Typography>
                <Input />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Typography variant="h6">Input with icon start</Typography>
                <InputGroup>
                    <InputGroupText>
                        <MdMenu />
                    </InputGroupText>
                    <Input placeholder="username" />
                </InputGroup>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Typography variant="h6">Input with icon end</Typography>
                <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupText>
                        <MdMenu />
                    </InputGroupText>
                </InputGroup>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Typography variant="h6">Input with dropdown</Typography>
                <InputGroup>
                    <Input placeholder="username" />
                    {/* <Dropdown
                    isOpen={dropdownOpen}
                    toggle={()=>setDropdownOpen(!dropdownOpen)}
                    >
                        <DropdownToggle caret>
                            Button Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>
                            Header
                            </DropdownItem>
                            <DropdownItem disabled>
                            Action
                            </DropdownItem>
                            <DropdownItem>
                            Another Action
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Another Action
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown> */}
                </InputGroup>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <a href={'https://reactstrap.github.io/?path=/docs/components-forms--input'}>For more reference open this link</a>
            </div>
        </div>
    );
};

export default ButtonPage;

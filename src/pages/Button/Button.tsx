import React from "react";
import Typography from "../../components/Typpgraphy/Typography";
import {
    Button,
} from 'reactstrap';
import { MdMenu } from "react-icons/md";

const ButtonPage: React.FC = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
            <h1>Button Examples</h1>
            <div style={{ marginBottom: "20px" }}>
                <Button>
                    Default Button
                </Button>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Button>
                    Button with icon <MdMenu size={22}/>
                </Button>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Button disabled>
                    Button disabled
                </Button>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <a href={'https://reactstrap.github.io/?path=/docs/components-button--button'}>For more reference open this link</a>
            </div>
        </div>
    );
};

export default ButtonPage;

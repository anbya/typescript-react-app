import React from "react";
import Typography from "../../components/Typpgraphy/Typography";

const TypographyPage: React.FC = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
        <h1>Typography Examples</h1>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h1">Heading 1</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h2">Heading 2</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h3">Heading 3</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h4">Heading 4</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h5">Heading 5</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="h6">Heading 6</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="body1">
            This is body1 text. Body text is usually used for paragraphs, longer text content.
            </Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="body2">
            This is body2 text. It is typically used for smaller text content.
            </Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="subtitle1">This is subtitle1 text</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="subtitle2">This is subtitle2 text</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="caption">This is caption text</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="overline">This is overline text</Typography>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <Typography variant="button">This is button text</Typography>
        </div>
        </div>
    );
};

export default TypographyPage;


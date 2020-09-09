import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ModalUserLike(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [userData, setUserData] = useState(undefined);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    const { open, handleClose } = props;
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [created, setCreated] = React.useState(undefined);

    const history = useHistory();

    const { id } = useParams();
    console.log("id", id);
    React.useEffect(() => {
        const token = localStorage.getItem("user");
        fetch(`http://localhost/api/user/${id}`, {
            method: "get",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                authorization: "Bearer " + token,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((resJson) => {
                console.log("setUserData");
                setUserData(resJson);
            });
    }, [id]);

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = () => {
        const token = localStorage.getItem("user");
        setIsSubmitting(true);
        fetch(`http://localhost/api/user/${id}`, {
            method: "put",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                authorization: "Bearer " + token,
            },
            body: JSON.stringify(userData),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((resJson) => {
                setCreated(resJson);
                setIsSubmitting(false);
                history.push("/profile");
            });
    };
    /* console.log("open", open); */
    return userData ? (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Editar Perfil</h2>
                <button className={"tweetButton"} onClick={handleFormSubmit}>
                    Guardar
                </button>
                <hr />
                <input
                    id={"name"}
                    name={"name"}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    value={userData.name}
                    type="text"
                    className="InputEdit"
                />
                <hr />
                <input
                    id={"surname"}
                    name={"surname"}
                    onChange={handleInputChange}
                    placeholder="Apellido"
                    value={userData.surname}
                    type="url"
                />
                <hr />
                <input
                    id={"email"}
                    name={"email"}
                    onChange={handleInputChange}
                    placeholder="Correo electronico"
                    value={userData.email}
                />
                <hr />
                <input
                    id={"description"}
                    name={"description"}
                    onChange={handleInputChange}
                    placeholder="Descripción"
                    value={userData.description}
                />
            </div>
        </Modal>
    ) : null;
}
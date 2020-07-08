import React, {useState} from "react";
import authHeader from "../../../Api/authHeader";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditProfile(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [userData, setUserData] = useState(undefined);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const {open, handleClose } = props;

    const {id} = useParams();

    React.useEffect(() => { fetch(`http://localhost/api/user/${id}`, {
        method: "get",
        mode: "cors",
        headers: {
            "content-type": "application/json",
            "headers": authHeader(),
        },
    }).then(res => {
        if (res.ok) {
            return res.json()
        } throw res
    }).then(resJson => {
        setUserData(resJson);
    });
    }, [id]);

    console.log(userData)


    return userData ? (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>{userData.name}</div>
            </Modal>


    ): null;
}

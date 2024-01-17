import React, {useEffect, useState} from "react";
import MessageContainer from "./MessageContainer";
import ContactContainer from "./ContactContainer";
import Error from "../Misc/Error";
import Loading from "../Misc/Loading";
import styles from "./styles/chatPageStyles";
import {useDispatch, useSelector} from 'react-redux';
import {fetchChats} from "../../api/chatRequests";
import {CHAT_PATH_BY_MEMBER} from "../../constants/ApiPath";
import {loadChat} from "../../redux/chatReducer";

const ChatPage = ({isChatFetching, isChatError }) => {
    const chats = useSelector(state => state.chatReducer);
    const initialState = chats.length>0? chats[0]["id"] : null
    const [currentChatId, setCurrentChatId] = useState(initialState);
    const classes = styles();

    return (
        <div className={classes.chat}>
            {isChatFetching && <Loading/>}
            {isChatError && <Error>{'Could not fetch chat data! 🔥'}</Error>}
            {
                !isChatFetching && !isChatError &&
                <ContactContainer
                    currentChatId={currentChatId}
                    setCurrentChatId={setCurrentChatId}
                />
            }
            {
                chats.length > 0 &&
                <MessageContainer
                    currentChatId={currentChatId}
                    setCurrentChatId={setCurrentChatId}
                />
            }
        </div>
    )
}

export default ChatPage
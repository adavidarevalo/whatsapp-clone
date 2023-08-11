import React from 'react'
import { useSelector } from 'react-redux';
import ConversationItem from './item';
import { AppState } from '../../../redux/store';
import { Conversation } from '../../../types/conversation.type';
import { getConversationId } from '../../../utils/get_conversation';


export default function SidebarConversation() {
  const { conversations, onlineUsers } = useSelector((state: AppState) => state.chat);
  const { user } = useSelector((state: AppState) => state.user);

  return (
    <div className="conversation scrollbar">
      <ul>
        {/* {(conversations || []).filter((c: any) => c.latestMessage || c._id === activeConversation._id).map((conversation: any) => ( */}
        {conversations &&
          conversations.map((conversation: Conversation) => {
            const isOnline = onlineUsers.some(({ userId }) => userId === getConversationId(user as any, conversation.users));
            return <ConversationItem key={conversation._id} conversation={conversation} isOnline={isOnline} />;
          })}
      </ul>
    </div>
  );
}
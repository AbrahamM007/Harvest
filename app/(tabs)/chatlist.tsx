import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Chat = {
  id: string;
  name: string;
  status: string;
  lastMessage: string;
};

type Message = {
  id: string;
  text?: string;
  image?: string;
  sender: 'me' | 'other';
};

const App: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState<string>('');
  const [messageHistory, setMessageHistory] = useState<{ [key: string]: Message[] }>({
    '1': [
      { id: '1', text: "Hey, You're selling lemons for $7 right?", sender: 'me' },
      { id: '2', text: 'Yeah, You interested in buying?', sender: 'other' },
      { id: '3', text: "I'd love too! Could I get a small bag?", sender: 'me' },
      { id: '4', text: "I only have 3 dollars that's why", sender: 'me' },
      { id: '5', text: "That's fine, I'll give you a bag for $3, does this work?", sender: 'other' },
      { id: '6', image: 'https://via.placeholder.com/150', sender: 'other' },
    ],
    '2': [],
    '3': [],
  });

  const chats: Chat[] = [
    { id: '1', name: 'Izaac Nathanial Marthell', status: 'Online', lastMessage: "Thats fine, I'll give you a bag for $6..." },
    { id: '2', name: 'Joel Chavez', status: 'Online', lastMessage: 'You - 300 LBS?' },
    { id: '3', name: 'Andrea Sullivan', status: 'Online', lastMessage: "I'm not allowed near that place" },
  ];

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => setSelectedChat(item.id)}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  const renderMessageItem = ({ item }: { item: Message }) => (
    <View style={[styles.messageItem, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      {item.text && <Text style={styles.messageText}>{item.text}</Text>}
      {item.image && <Image source={{ uri: item.image }} style={styles.messageImage} />}
    </View>
  );

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = { id: Date.now().toString(), text: messageInput, sender: 'me' };
      const updatedMessages = { ...messageHistory };
      if (selectedChat) {
        updatedMessages[selectedChat] = [...(updatedMessages[selectedChat] || []), newMessage];
        setMessageHistory(updatedMessages);
        setMessageInput('');
      }
    }
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        const newMessage: Message = { id: Date.now().toString(), image: selectedImage, sender: 'me' };
        const updatedMessages = { ...messageHistory };
        if (selectedChat) {
          updatedMessages[selectedChat] = [...(updatedMessages[selectedChat] || []), newMessage];
          setMessageHistory(updatedMessages);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      {selectedChat === null ? (
        <View style={styles.chatListContainer}>
          <Text style={styles.title}>Chats</Text>
          <FlatList
            data={chats}
            renderItem={renderChatItem}
            keyExtractor={(item) => item.id}
            style={styles.chatList}
          />
          <Text style={styles.findVendorsText}>Find some vendors with your favorite produce!</Text>
        </View>
      ) : (
        <View style={styles.chatContainer}>
          <TouchableOpacity onPress={() => setSelectedChat(null)} style={styles.backButton}>
            <Ionicons name="arrow-back" size={30} color="#86D861" />
          </TouchableOpacity>
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Izaac's Chat</Text>
          </View>
          <FlatList
            data={messageHistory[selectedChat]}
            renderItem={renderMessageItem}
            keyExtractor={(item) => item.id}
            style={styles.messageList}
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={handleSelectImage}>
              <Ionicons name="camera" size={30} color="#86D861" />
            </TouchableOpacity>
            <TextInput
              placeholder="Type a message"
              style={styles.input}
              value={messageInput}
              onChangeText={setMessageInput}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
              <Ionicons name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  chatListContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#86D861',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 60,
  },
  chatList: {
    marginBottom: 16,
  },
  chatItem: {
    borderTopWidth: 1,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    borderColor: '#CECECE',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#666',
  },
  findVendorsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 16,
  },
  chatContainer: {
    flex: 1,
  },
  backButton: {
    padding: 8,
    marginTop: 20,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#CECECE',
  },
  chatTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#86D861',
    marginBottom: 16,
    
  },
  messageList: {
    flex: 1,
  },
  messageItem: {
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  myMessage: {
    backgroundColor: '#86D861',
    alignSelf: 'flex-end',
    borderRadius: 60,
    color: '#074100',
  },
  otherMessage: {
    backgroundColor: '#A9EE89',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  messageText: {
    color: '#000',
  },
  messageImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#DDFFCD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 8,
    marginLeft: 15,
  },
  sendButton: {
    backgroundColor: '#86D861',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
});

export default App;

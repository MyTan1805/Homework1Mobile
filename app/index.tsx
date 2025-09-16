import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.registerButton]}
          onPress={() => router.push('/register')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Phân tích màu sắc và style từ ảnh mới
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F2F3', // Màu nền màn hình chính xác như yêu cầu
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#202A71', // Màu xanh navy đậm hơn từ ảnh
    paddingVertical: 12,        // Giảm padding dọc cho nút nhỏ hơn
    paddingHorizontal: 40,      // Tăng padding ngang để nút rộng ra một chút
    borderRadius: 10,           // Bo góc tròn hơn
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    // Bỏ 'width: 100%' để nút tự co giãn theo nội dung
  },
  registerButton: {
    marginTop: 20, // Giữ khoảng cách giữa hai nút
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16, // Font size nhỏ hơn một chút
    fontWeight: '500',
  },
});

export default HomeScreen;
import React, { useState } from "react";
import { Image, View, Modal, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import ImageViewer from 'react-native-image-zoom-viewer';

const ZoomImage = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Modal visible={showModal} transparent={true}>
      <ImageViewer
        imageUrls={[{ props: { ...props } }]}
        renderIndicator={() => null}
        renderHeader={() => (
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
            <View style={{ padding: 20 }}>
              <Icon name="close" size={20} color="white" />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </Modal>
    <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
      <Image {...props} />
    </TouchableWithoutFeedback>
    </>
  )
}

export default ZoomImage;

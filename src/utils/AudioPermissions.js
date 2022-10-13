import {PermissionsAndroid, Platform} from 'react-native';
export const AskAudioPermissions = async () => {
  console.log('Asking Permissions or not');
  if (Platform.OS === 'android') {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        // PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
        // PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      ]);

      console.log('write external stroage', grants);

      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
        //   &&
        // grants['android.permission.ACCESS_MEDIA_LOCATION'] ===
        //   PermissionsAndroid.RESULTS.GRANTED &&
        // grants['android.permission.READ_MEDIA_AUDIO'] ===
        //   PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
};

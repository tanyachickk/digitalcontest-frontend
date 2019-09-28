<template lang="pug">
  .image-uploader(:class="size")
    .image-uploader__image(:style="backgroundStyle")
      i.material-icons.image-uploader__placeholder(v-if="!value") add_a_photo
    .image-uploader__loader(v-if="isLoading")
      //- progress-spinner(:size="70")
    label.image-uploader__control.uploader-control(v-if="!isLoading" for="uploader")
      .uploader-control__text
      basic-button.uploader-control__button {{ $tr.text('Change photo') }}
    input#uploader(
      type="file"
      accept=".jpg, .jpeg, .png"
      @change="uploadPhoto($event.target.files[0])"
    )
</template>

<script lang="ts">
import { Mixins, Component, Prop } from "vue-property-decorator";
import StaticHostApplyMx from "@/mixins/StaticHostApplyMx";
import UploadService from "@/services/upload";
import BasicButton from "@/components/ui/basicButton";
// import ProgressSpinner from '@/components/ui/progressSpinner';

@Component({
  components: {
    BasicButton
    // ProgressSpinner,
  }
})
export default class ImageUploader extends Mixins(StaticHostApplyMx) {
  @Prop({ type: Object, default: null })
  value: any;
  @Prop({ type: String, default: "large" })
  size: "small" | "default" | "large";

  uploader = new UploadService();
  isLoading = false;

  get backgroundStyle() {
    return this.value && this.value.src
      ? `backgroundImage: url(${this.appStaticHostApply(this.value.src)})`
      : "";
  }

  async uploadPhoto(file: File) {
    this.$emit("start-loading");
    this.isLoading = true;
    const formData = new FormData();
    formData.append("src", file);

    try {
      const uploadedPhoto = await this.uploader.uploadMultipartFormData(
        formData
      );
      this.$emit("input", uploadedPhoto);
    } catch (_) {
      (this.$toasted as any).global.error(
        "An error occurred while uploading photo"
      );
    } finally {
      this.isLoading = false;
      this.$emit("end-loading");
    }
  }
}
</script>

<style lang="scss" scoped>
.image-uploader {
  position: relative;
  border: 1px solid var(--light-gray);
  border-radius: 0.25rem;
  overflow: hidden;
  &:hover {
    .uploader-control {
      z-index: 1;
      opacity: 1;
    }
  }
  &.large {
    width: 198px;
    height: 198px;
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--extra-light);
    background-size: cover;
    background-position: center center;
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
  }
  &__placeholder {
    font-size: 5rem;
    color: var(--light-gray);
  }
}
.uploader-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease, z-index 0.2s ease;
}
#uploader {
  display: none;
}
</style>

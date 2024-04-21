---
slug: inpaintingdetection
title: Detecting Image Inpainting With Forensic Models
date: 2024-04-12
description: >
    Modern inpainting tools are a powerful tool for manipulating information. Inpainted regions blend seamlessly into the real image, allowing it to bypass most AI image detectors. In this project, we develop a model that can detect inpainted regions in an image by using forensic filters to identify statistical anomalies. Our experiments show that our forensic model outperforms standard segmentation models by 19.5% in pixel-level F1-score.
---

## Introduction

![Stalin and Nikolai Yezhov strolling along the Moscow-Volga Canal](stalin_inpainting.jpg)

Image inpainting, the process of reconstructing a region in an image, has been used to manipulate information since Stalin's rule of Soviet Russia in the 1930s. Compare an original image of Stalin and Nikolai Yezhov strolling along the Moscow-Volga Canal (left), with an edited version where Yezhov has been completely removed through manual inpainting techniques (right). Image inpainting enabled Stalin to erase his enemies not just from photos, but from history.

While Stalin needed a team of artists, modern inpainting can be done within seconds. Tools such as Photoshop use advanced algorithms to fill in missing regions of an image by sampling information from the surrounding areas. Deep learning-based methods like generative adversarial networks (GANs) and diffusion models have also become more popular in recent years. Text-guided generative models like Stable Diffusion allow users to manipulate images in almost any way they see fit with a suitable text prompt. The threat of inpainting will only continue to grow as technology advances.

There are many legitimate use cases of inpainting: removing unwanted objects, repairing old or damaged photos, and editing images for creative purposes. However, it also enables the spread of misinformation. Images are often used to make news appear more credible. A fake image attached to a fake article can be a powerful tool of deception. Therefore, an effective way to identify whether an image is authentic is vital to stopping the spread of misinformation. Many tools are being developed to detect AI-generated content, but they are easily bypassed by inpainting.

![An inpainted image is classified as "Likely Human"](bypass_ai_detectors.png)

Rather than trying to generate a realistic image, it is far simpler for threat actors to manipulate an existing image. The image above shows “AI or Not”, a popular web-based AI detector, failing to detect an inpainted image. The inpainted regions camouflage within the real regions, highlighting a critical gap in current technology. In this project, our goal is to build a model that can not only detect whether an image has been inpainted but also identify the inpainted regions.

## Forensic Filters

Some inpainted images might contain blurred or unnatural regions, but high-quality inpainting tools can fill in missing regions seamlessly, making them completely invisible. In these cases, our approach relies on the assumption that image manipulation leaves statistical traces behind in the image. Recent work discussed 3 forensic filters to extract these traces from the raw image:Some inpainted images might contain blurred or unnatural regions, but high-quality inpainting tools can fill in missing regions seamlessly, making them completely invisible. In these cases, our approach relies on the assumption that image manipulation leaves statistical traces behind in the image. Recent work discussed 3 forensic filters to extract these traces from a raw image:

![Comparison of various forensic filters](forensic_filters.png)

## Multimodal Fusion

The RGB image contains visible features such as colours, textures, and patterns. On the other hand, the forensic filters extract the statistical features not visible to the human eye. The 2 modalities contain complementary information that we can use to identify anomalous regions in an image. How might we fuse them to create a unified representation of the image?

![CMX: Cross-Modal Fusion for RGB-X Semantic
Segmentation with Transformers](cmx.png)

## Model Training

## Conclusion

# Pentagram: Instagram, but with AI Images
Submitted by: **Kevin**

**AI-Images: Instagram** is an AI-powered image generator.

## Required Features

The following **required** functionality is completed:

- [X] **Host an image generation model (e.g., Stable Diffusion) on serverless GPUs through Modal, ensuring low-latency performance for smooth user experience.**
- [X] **Create a web app that allows users to generate images from text prompts, manage their creations, and interact socially through likes, comments, and sharing features.**
- [X] **Incorporate intuitive UI/UX design, authentication, and efficient image management with prompt histories.**

The following **optional** features are implemented:
- [ ] Bonus: Ensuring the hosted image generation model operates within low-latency thresholds (<2 seconds) while handling multiple concurrent requests
- [ ] Bonus: Managing the dynamic scaling of GPU resources to handle demand spikes without exceeding cost or causing performance bottlenecks.
- [ ] Bonus: Add the ability to search for images semantically
- [ ] Bonus: Prevent harmful or inappropriate content from being generated
- [ ] Bonus: Build a recommendation system that creates personalized feeds for users, balancing new content discovery with user preferences

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

## Resources
- Hello, world!: https://modal.com/docs/examples/hello_world
- Building a Stable Diffusion + LoRA image generation pipeline on Modal: https://www.youtube.com/watch?v=sHSKArbiKmU&ab_channel=Modal
- Run Stable Diffusion 3.5 Large Turbo as a CLI, API, and web UI: https://modal.com/docs/examples/text_to_image
- H100 vs Other GPUs Choosing The Right GPU for your machine learning workload: https://www.digitalocean.com/community/tutorials/h100_vs_other_gpus_choosing_the_right_gpu_for_your_machine_learning_workload
- Modal Playground: https://modal.com/playground/get_started
- Cold start performance: https://modal.com/docs/guide/cold-start
- Huggingface text to image models: https://modal.com/docs/guide/cold-start
- Web endpoints: https://modal.com/docs/guide/webhooks
  
Describe any challenges encountered while building the app.
    
## License

    Copyright [2025] [Kevin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

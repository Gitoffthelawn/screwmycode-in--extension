/* eslint-disable no-template-curly-in-string */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    ['@semantic-release/exec', {
      prepareCmd: 'yarn build:increment ${nextRelease.version} && yarn build',
    }],
    ['semantic-release-firefox-add-on', {
      extensionId: '{872c65ed-a9cf-4f58-871b-71f787a4f436}',
      targetXpi: 'screwmycode-in--extension-${nextRelease.version}.xpi',
      sourceDir: 'dist/firefox',
      artifactsDir: 'packages',
      channel: 'listed',
    }],
    ['semantic-release-chrome', {
      extensionId: 'lnoedjelpkmhegefhhjljmggjdicnbaa',
      asset: 'bandcamp-plus--extension-${nextRelease.version}.zip',
      distFolder: 'dist/chrome',
    }],
    ['@semantic-release/github', {
      assets: [
        'packages/screwmycode-in--extension-${nextRelease.version}.xpi',
        'screwmycode-in--extension-${nextRelease.version}.zip',
      ],
    }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG.md',
        'package.json',
        'src/manifest.json',
      ],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};

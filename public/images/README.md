# Images Folder

## Adding Your Profile Photo

To add your professional photo to the portfolio:

1. **Add your photo** to this folder (`public/images/`)
2. **Recommended filename**: `profile.jpg` or `profile.png`
3. **Recommended size**: 400x400 pixels or larger (square format works best)
4. **File format**: JPG, PNG, or WebP

## Update the Code

After adding your photo, update the About component:

1. Open `src/components/About.tsx`
2. Find the commented section that says `{/* Uncomment and use this when you add your photo: */}`
3. Replace the placeholder div with:

```jsx
<img 
  src="/images/profile.jpg" 
  alt="Mohamed Aziz MENSI" 
  className="w-full h-full object-cover"
/>
```

4. Comment out or remove the placeholder div above it

## Photo Tips

- **Professional appearance**: Business casual or formal attire
- **Good lighting**: Natural light or professional lighting
- **Clean background**: Solid color or minimalist background
- **High resolution**: At least 400x400 pixels for crisp display
- **File size**: Keep under 1MB for faster loading

## Example Structure

```
public/
  images/
    profile.jpg         <- Your main profile photo
    profile-alt.jpg     <- Alternative photo (optional)
    README.md          <- This file
```

The photo will automatically be displayed with a beautiful gradient border and floating animations!

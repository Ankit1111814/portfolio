#!/bin/bash

# Portfolio Launch Script
echo "🚀 Launching Ankit's Portfolio Website..."
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the portfolio directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📄 Files found:"
ls -la

echo ""
echo "🌐 Opening portfolio in default browser..."

# Detect OS and open browser accordingly
if command -v xdg-open > /dev/null; then
    # Linux
    xdg-open index.html
elif command -v open > /dev/null; then
    # macOS
    open index.html
elif command -v start > /dev/null; then
    # Windows
    start index.html
else
    echo "❌ Unable to detect browser opener. Please open index.html manually in your browser."
    exit 1
fi

echo "✅ Portfolio launched successfully!"
echo ""
echo "📝 Next steps:"
echo "   1. Replace assets/images/profile.jpg with your photo"
echo "   2. Update personal information in index.html"
echo "   3. Add your project screenshots to assets/projects/"
echo "   4. Update social media links and contact information"
echo "   5. Replace assets/resume.pdf with your actual resume"
echo ""
echo "🎨 For customization help, check README.md"
echo "💡 Tip: Use browser developer tools to inspect and customize"

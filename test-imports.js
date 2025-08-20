// Test imports for Vercel Analytics packages
try {
  const { Analytics } = require('@vercel/analytics/react');
  console.log('✅ @vercel/analytics/react imported successfully');
} catch (error) {
  console.log('❌ @vercel/analytics/react failed:', error.message);
}

try {
  const { SpeedInsights } = require('@vercel/speed-insights/next');
  console.log('✅ @vercel/speed-insights/next imported successfully');
} catch (error) {
  console.log('❌ @vercel/speed-insights/next failed:', error.message);
}

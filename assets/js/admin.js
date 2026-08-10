/* ========================================
   Admin CMS Panel JavaScript
   ======================================== */

// Admin state
let adminLoggedIn = false;
let currentAdminPage = 'dashboard';

// Default admin credentials (demo only)
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAuth();
    initAdminLogin();
    initAdminNavigation();
});

// Check if admin is logged in
function checkAdminAuth() {
    adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    const loginPage = document.getElementById('adminLogin');
    const dashboard = document.getElementById('adminDashboard');
    
    if (adminLoggedIn) {
        if (loginPage) loginPage.style.display = 'none';
        if (dashboard) dashboard.style.display = 'grid';
        renderAdminPage('dashboard');
    } else {
        if (loginPage) loginPage.style.display = 'flex';
        if (dashboard) dashboard.style.display = 'none';
    }
}

// Admin login
function initAdminLogin() {
    const loginForm = document.getElementById('adminLoginForm');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            adminLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            checkAdminAuth();
            showAdminNotification('Login successful!', 'success');
        } else {
            showAdminNotification('Invalid username or password', 'error');
        }
    });
}

// Admin logout
function adminLogout() {
    adminLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    checkAdminAuth();
    showAdminNotification('Logged out successfully', 'info');
}

// Admin navigation
function initAdminNavigation() {
    const navItems = document.querySelectorAll('.admin-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                renderAdminPage(page);
            }
        });
    });
    
    // Logout button
    const logoutBtn = document.querySelector('.admin-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', adminLogout);
    }
}

// Render admin page
function renderAdminPage(page) {
    currentAdminPage = page;
    
    // Update nav active state
    document.querySelectorAll('.admin-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });
    
    // Update page title
    const titleEl = document.querySelector('.admin-header-title h1');
    const pageTitles = {
        'dashboard': 'Dashboard',
        'products': 'Product Management',
        'categories': 'Categories',
        'inquiries': 'Inquiry Management',
        'certifications': 'Certifications',
        'testimonials': 'Testimonials',
        'banners': 'Banners',
        'media': 'Media Library',
        'settings': 'Settings',
        'seo': 'SEO Settings'
    };
    if (titleEl) {
        titleEl.textContent = pageTitles[page] || 'Dashboard';
    }
    
    // Render content
    const content = document.getElementById('adminContent');
    if (!content) return;
    
    switch(page) {
        case 'dashboard':
            renderDashboard(content);
            break;
        case 'products':
            renderProductsManagement(content);
            break;
        case 'inquiries':
            renderInquiriesManagement(content);
            break;
        case 'categories':
            renderCategoriesManagement(content);
            break;
        case 'certifications':
            renderCertificationsManagement(content);
            break;
        case 'testimonials':
            renderTestimonialsManagement(content);
            break;
        case 'banners':
            renderBannersManagement(content);
            break;
        case 'media':
            renderMediaManagement(content);
            break;
        case 'settings':
            renderSettings(content);
            break;
        case 'seo':
            renderSEOSettings(content);
            break;
        default:
            renderDashboard(content);
    }
}

// Dashboard
function renderDashboard(container) {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    const products = JSON.parse(localStorage.getItem('adminProducts') || 'null') || productsData;
    
    container.innerHTML = `
        <div class="admin-stats">
            <div class="admin-stat-card">
                <div class="admin-stat-icon blue">
                    <span>📦</span>
                </div>
                <div class="admin-stat-info">
                    <h3>${products.length}</h3>
                    <p>Total Products</p>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="admin-stat-icon green">
                    <span>📨</span>
                </div>
                <div class="admin-stat-info">
                    <h3>${inquiries.length}</h3>
                    <p>Total Inquiries</p>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="admin-stat-icon orange">
                    <span>⏳</span>
                </div>
                <div class="admin-stat-info">
                    <h3>${inquiries.filter(i => i.status === 'pending').length}</h3>
                    <p>Pending Replies</p>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="admin-stat-icon purple">
                    <span>🏆</span>
                </div>
                <div class="admin-stat-info">
                    <h3>5</h3>
                    <p>Certifications</p>
                </div>
            </div>
        </div>
        
        <div class="admin-card" style="margin-top: 2rem;">
            <div class="admin-card-header">
                <h3>Recent Inquiries</h3>
                <button class="btn btn-small btn-primary" onclick="renderAdminPage('inquiries')">View All</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${inquiries.slice(0, 5).map(inq => `
                        <tr>
                            <td>${inq.name || inq['Name'] || '-'}</td>
                            <td>${inq.email || inq['Email'] || '-'}</td>
                            <td>${inq.product || inq['Product Interested'] || '-'}</td>
                            <td>${new Date(inq.date).toLocaleDateString()}</td>
                            <td><span class="status-badge ${inq.status}">${inq.status}</span></td>
                        </tr>
                    `).join('') || '<tr><td colspan="5" style="text-align:center;color:#b2bec3;padding:2rem;">No inquiries yet</td></tr>'}
                </tbody>
            </table>
        </div>
        
        <div class="admin-card" style="margin-top: 2rem;">
            <div class="admin-card-header">
                <h3>Quick Actions</h3>
            </div>
            <div style="padding: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="renderAdminPage('products')">Manage Products</button>
                <button class="btn btn-secondary" onclick="renderAdminPage('inquiries')">View Inquiries</button>
                <button class="btn btn-outline" onclick="exportInquiries()">Export Inquiries</button>
                <button class="btn btn-outline" onclick="renderAdminPage('settings')">Site Settings</button>
            </div>
        </div>
    `;
}

// Products management
function renderProductsManagement(container) {
    const products = JSON.parse(localStorage.getItem('adminProducts') || 'null') || productsData;
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Product Management (${products.length} products)</h3>
                <button class="btn btn-small btn-primary" onclick="showAddProductModal()">+ Add Product</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Model</th>
                        <th>MOQ</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                        <tr>
                            <td>${product.id}</td>
                            <td><strong>${product.name}</strong></td>
                            <td>${product.category}</td>
                            <td>${product.model}</td>
                            <td>${product.moq}</td>
                            <td><span class="status-badge active">Active</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="editProduct(${product.id})">Edit</button>
                                    <button class="action-btn delete" onclick="deleteProduct(${product.id})">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Inquiries management
function renderInquiriesManagement(container) {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Inquiry Management (${inquiries.length} inquiries)</h3>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-small btn-outline" onclick="exportInquiries()">Export CSV</button>
                </div>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${inquiries.map(inq => `
                        <tr>
                            <td>#${inq.id}</td>
                            <td><strong>${inq.name || inq['Name'] || '-'}</strong></td>
                            <td>${inq.company || inq['Company Name'] || '-'}</td>
                            <td>${inq.email || inq['Email'] || '-'}</td>
                            <td>${inq.country || inq['Country'] || '-'}</td>
                            <td>${inq.product || inq['Product Interested'] || '-'}</td>
                            <td>${new Date(inq.date).toLocaleDateString()}</td>
                            <td><span class="status-badge ${inq.status}">${inq.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="viewInquiry(${inq.id})">View</button>
                                    <button class="action-btn edit" onclick="markAsReplied(${inq.id})">Mark Replied</button>
                                    <button class="action-btn delete" onclick="deleteInquiry(${inq.id})">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('') || '<tr><td colspan="9" style="text-align:center;color:#b2bec3;padding:2rem;">No inquiries yet</td></tr>'}
                </tbody>
            </table>
        </div>
    `;
}

// Categories management
function renderCategoriesManagement(container) {
    const categories = [
        { id: 1, name: 'Compressor Nebulizer', count: 3 },
        { id: 2, name: 'Portable Mesh Nebulizer', count: 3 },
        { id: 3, name: 'Ultrasonic Nebulizer', count: 1 },
        { id: 4, name: 'Pediatric Nebulizer', count: 2 },
        { id: 5, name: 'Home Respiratory Care', count: 2 },
        { id: 6, name: 'Hospital Medical Equipment', count: 1 }
    ];
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Category Management (${categories.length} categories)</h3>
                <button class="btn btn-small btn-primary" onclick="showAdminNotification('Add category modal would open here', 'info')">+ Add Category</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Products</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${categories.map(cat => `
                        <tr>
                            <td>${cat.id}</td>
                            <td><strong>${cat.name}</strong></td>
                            <td>${cat.count}</td>
                            <td><span class="status-badge active">Active</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="showAdminNotification('Edit category', 'info')">Edit</button>
                                    <button class="action-btn delete" onclick="showAdminNotification('Delete category', 'info')">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Certifications management
function renderCertificationsManagement(container) {
    const certs = [
        { id: 1, name: 'CE Certification', type: 'EU Medical Device', status: 'active' },
        { id: 2, name: 'ISO 13485', type: 'Quality Management', status: 'active' },
        { id: 3, name: 'FDA Registration', type: 'US Market Access', status: 'active' },
        { id: 4, name: 'RoHS', type: 'Environmental', status: 'active' },
        { id: 5, name: 'Medical Device Compliance', type: 'Global Standards', status: 'active' }
    ];
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Certification Management (${certs.length} certifications)</h3>
                <button class="btn btn-small btn-primary" onclick="showAdminNotification('Add certification modal would open here', 'info')">+ Add Certification</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Certification Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${certs.map(cert => `
                        <tr>
                            <td>${cert.id}</td>
                            <td><strong>${cert.name}</strong></td>
                            <td>${cert.type}</td>
                            <td><span class="status-badge active">Active</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="showAdminNotification('Edit certification', 'info')">Edit</button>
                                    <button class="action-btn delete" onclick="showAdminNotification('Delete certification', 'info')">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Testimonials management
function renderTestimonialsManagement(container) {
    const testimonials = [
        { id: 1, name: 'James Wilson', role: 'CEO, MedEquip Europe', rating: 5 },
        { id: 2, name: 'Dr. Ahmed Hassan', role: 'Procurement Director, Gulf Medical Supplies', rating: 5 },
        { id: 3, name: 'Maria Rodriguez', role: 'Product Manager, Salud Latin America', rating: 5 }
    ];
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Testimonial Management (${testimonials.length} testimonials)</h3>
                <button class="btn btn-small btn-primary" onclick="showAdminNotification('Add testimonial modal would open here', 'info')">+ Add Testimonial</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${testimonials.map(t => `
                        <tr>
                            <td>${t.id}</td>
                            <td><strong>${t.name}</strong></td>
                            <td>${t.role}</td>
                            <td>${'⭐'.repeat(t.rating)}</td>
                            <td><span class="status-badge active">Published</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="showAdminNotification('Edit testimonial', 'info')">Edit</button>
                                    <button class="action-btn delete" onclick="showAdminNotification('Delete testimonial', 'info')">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Banners management
function renderBannersManagement(container) {
    const banners = [
        { id: 1, name: 'Hero Banner - Main', page: 'Homepage', status: 'active' },
        { id: 2, name: 'Inquiry Section Banner', page: 'Homepage', status: 'active' }
    ];
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Banner Management (${banners.length} banners)</h3>
                <button class="btn btn-small btn-primary" onclick="showAdminNotification('Add banner modal would open here', 'info')">+ Add Banner</button>
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Banner Name</th>
                        <th>Page</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${banners.map(b => `
                        <tr>
                            <td>${b.id}</td>
                            <td><strong>${b.name}</strong></td>
                            <td>${b.page}</td>
                            <td><span class="status-badge active">Active</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn edit" onclick="showAdminNotification('Edit banner', 'info')">Edit</button>
                                    <button class="action-btn delete" onclick="showAdminNotification('Delete banner', 'info')">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Media management
function renderMediaManagement(container) {
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Media Library</h3>
                <button class="btn btn-small btn-primary" onclick="showAdminNotification('Upload media modal would open here', 'info')">+ Upload Media</button>
            </div>
            <div style="padding: 2rem; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;">📁</div>
                <p style="color: #b2bec3;">Media library interface</p>
                <p style="color: #dfe6e9; font-size: 0.85rem;">Upload and manage images, videos, and certificate files</p>
            </div>
        </div>
    `;
}

// Settings
function renderSettings(container) {
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>Company Information</h3>
            </div>
            <div style="padding: 2rem;">
                <form id="settingsForm" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
                    <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" id="companyName" value="${settings.companyName || 'Guangxi Maikang'}" placeholder="Company name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="companyEmail" value="${settings.email || 'sales@xionxio.com'}" placeholder="Email address">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" id="companyPhone" value="${settings.phone || '+86 18128630179'}" placeholder="Phone number">
                    </div>
                    <div class="form-group">
                        <label>WhatsApp</label>
                        <input type="text" id="companyWhatsapp" value="${settings.whatsapp || '+86 18128630179'}" placeholder="WhatsApp number">
                    </div>
                    <div class="form-group full-width" style="grid-column: span 2;">
                        <label>Address</label>
                        <input type="text" id="companyAddress" value="${settings.address || '2F, Building 8, Yunlang Science & Technology Park, Intersection of Beibuwan Avenue and Wenchang Avenue, Fangcheng District, Fangchenggang City, Guangxi, China'}" placeholder="Company address">
                    </div>
                    <div class="form-group full-width" style="grid-column: span 2;">
                        <button type="submit" class="btn btn-primary">Save Settings</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    const form = document.getElementById('settingsForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const newSettings = {
                companyName: document.getElementById('companyName').value,
                email: document.getElementById('companyEmail').value,
                phone: document.getElementById('companyPhone').value,
                whatsapp: document.getElementById('companyWhatsapp').value,
                address: document.getElementById('companyAddress').value
            };
            localStorage.setItem('siteSettings', JSON.stringify(newSettings));
            showAdminNotification('Settings saved successfully!', 'success');
        });
    }
}

// SEO Settings
function renderSEOSettings(container) {
    const seo = JSON.parse(localStorage.getItem('seoSettings') || '{}');
    
    container.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-header">
                <h3>SEO Settings</h3>
            </div>
            <div style="padding: 2rem;">
                <form id="seoForm" style="display: flex; flex-direction: column; gap: 1.25rem;">
                    <div class="form-group">
                        <label>Default Meta Title</label>
                        <input type="text" id="metaTitle" value="${seo.metaTitle || 'Medical Nebulizer Manufacturer | Professional Respiratory Care Solutions'}" placeholder="Meta title">
                    </div>
                    <div class="form-group">
                        <label>Meta Description</label>
                        <textarea id="metaDescription" rows="3" placeholder="Meta description">${seo.metaDescription || 'Leading medical nebulizer manufacturer with 20+ years experience. OEM/ODM services, CE/FDA/ISO certified. Global export to 80+ countries.'}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Keywords</label>
                        <input type="text" id="metaKeywords" value="${seo.keywords || 'medical nebulizer manufacturer, China nebulizer supplier, portable nebulizer manufacturer, OEM medical device factory'}" placeholder="Keywords separated by comma">
                    </div>
                    <div class="form-group">
                        <label>Google Analytics ID</label>
                        <input type="text" id="gaId" value="${seo.gaId || ''}" placeholder="G-XXXXXXXXXX">
                    </div>
                    <div class="form-group">
                        <label>Facebook Pixel ID</label>
                        <input type="text" id="fbPixel" value="${seo.fbPixel || ''}" placeholder="Facebook Pixel ID">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Save SEO Settings</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    const form = document.getElementById('seoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const newSEO = {
                metaTitle: document.getElementById('metaTitle').value,
                metaDescription: document.getElementById('metaDescription').value,
                keywords: document.getElementById('metaKeywords').value,
                gaId: document.getElementById('gaId').value,
                fbPixel: document.getElementById('fbPixel').value
            };
            localStorage.setItem('seoSettings', JSON.stringify(newSEO));
            showAdminNotification('SEO settings saved successfully!', 'success');
        });
    }
}

// Product actions
function showAddProductModal() {
    showAdminNotification('Add product modal would open here', 'info');
}

function editProduct(id) {
    showAdminNotification(`Edit product #${id}`, 'info');
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('adminProducts') || 'null') || [...productsData];
        products = products.filter(p => p.id !== id);
        localStorage.setItem('adminProducts', JSON.stringify(products));
        renderAdminPage('products');
        showAdminNotification('Product deleted successfully', 'success');
    }
}

// Inquiry actions
function viewInquiry(id) {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    const inquiry = inquiries.find(i => i.id === id);
    if (inquiry) {
        alert(`Inquiry #${id}\n\n` + JSON.stringify(inquiry, null, 2));
    }
}

function markAsReplied(id) {
    let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    const index = inquiries.findIndex(i => i.id === id);
    if (index !== -1) {
        inquiries[index].status = 'replied';
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        renderAdminPage('inquiries');
        showAdminNotification('Marked as replied', 'success');
    }
}

function deleteInquiry(id) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
        let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries = inquiries.filter(i => i.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        renderAdminPage('inquiries');
        showAdminNotification('Inquiry deleted successfully', 'success');
    }
}

function exportInquiries() {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    if (inquiries.length === 0) {
        showAdminNotification('No inquiries to export', 'warning');
        return;
    }
    
    // Convert to CSV
    const headers = Object.keys(inquiries[0]);
    const csvContent = [
        headers.join(','),
        ...inquiries.map(inq => headers.map(h => `"${inq[h] || ''}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inquiries.csv';
    a.click();
    URL.revokeObjectURL(url);
    
    showAdminNotification('Inquiries exported successfully', 'success');
}

// Admin notification
function showAdminNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        success: '#00b894',
        error: '#d63031',
        info: '#0984e3',
        warning: '#f39c12'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 14px 20px;
        background: ${colors[type] || colors.info};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        font-size: 0.9rem;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    notification.textContent = message;
    
    if (!document.getElementById('admin-notif-style')) {
        const style = document.createElement('style');
        style.id = 'admin-notif-style';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

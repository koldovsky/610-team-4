const $tabs = function (target) {
      let
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs-link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs-pane_show');
          
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs-link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs-pane_show');
          }
          
          tabsLinkTarget.classList.add('tabs-link_active');
          tabsPaneTarget.classList.add('tabs-pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          const tabsLinks = _elemTabs.querySelectorAll('.tabs-link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function (e) {
        const tabsLinkTarget = e.target;
        
        if (!tabsLinkTarget.classList.contains('tabs-link')) {
          return;
        }
        
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

    };

    $tabs('.tabs');